'use strict';

import angular from 'angular';

export default class SignupController {
    userType = [{
            type: "Marine Container Carrier",
            role: "user"
        },
        {
            type: "Trucking Company",
            role: "carrier"
        },
        {
            type: "Owner Operator",
            role: "carrier"
        },
        {
            type: "Freight Forwarder",
            role: "user"
        },
        {
            type: "Customs Broker",
            role: "user"
        },
        {
            type: "Freight Broker",
            role: "user"
        },
        {
            type: "Container Terminal Operator",
            role: "user"
        },
        {
            type: "Chassis Provider",
            role: "user"
        },
        // "9": {
        //     type: "Container Leasing Company (BCO)",
        //     role: "user"
        // }
    ];

    businessType = [
        { name: "Sole Proprietor" },
        { name: "Corporation" },
        { name: "LLC" },
        { name: "LLP" }
    ];

    user = {
        _id: '',
        name: '',
        email: '',
        password: '',
        phone: '',
        role: '',
        userType: '',
        companyId: ''
    };

    company = {
        name: '',
        firstName: '',
        lastName: '',
        address: '',
        businessType: '',
        taxId: '',
        type: '',
        brokerInfo: {
            SCAC: '',
        },
        carrierInfo: {
            mcNumber: '',
            DOT: '',
            SCAC: '',
            publicLiabilityinsuranceProvider: '', // Public Liability Insurance Provider
            cargoInsuranceProvider: '', // Cargo Insurance Provider
            hazmat: false,
            operationAreas: []
        }
    };

    // Areas Container Terminals Located
    operationAreas = [];

    errors = {};
    userSubmitted = false;
    companySubmitted = false;

    isUserSignup = true;

    userTypeSelected = "";

    /*@ngInject*/
    constructor(Auth, $location, Location, Company, $routeParams) {
        this.Auth = Auth;
        this.Company = Company;
        this.$location = $location;
        var _this = this;
        this.isFromAdmin = $routeParams['admin'] == 'admin';
        Location.query({}, function(data) {
            _this.operationAreas = data;
        }, function(err) {
        });
    }

    openTermsAndConditions() {

    }

    isTruckingorOwner(type){
        return type == 'Trucking Company' 
            || type == 'Owner Operator';
    }
    isFreight(type){
        return type == 'Customs Broker' 
            || type == 'Freight Broker' 
            || type == 'Freight Forwarder';
    }
    updateUser(form) {
        return user.$save
            .then(() => {
                if(this.isFromAdmin)
                    //If the route is from admin
                    this.$location.path('/admin');
                else
                    // Account created, redirect to home
                    this.$location.path('/');
            })
            .catch(err => {
                err = err.data;
                this.errors = {};
                // Update validity of form fields that match the mongoose errors
                angular.forEach(err.errors, (error, field) => {
                    form[field].$setValidity('mongoose', false);
                    this.errors[field] = error.message;
                });
            });
    }

    registerCompany(form) {
        this.companySubmitted = true;
        if (form.$valid) {

            return this.Company.save({
                name: this.company.name,
                address: this.company.address,
                businessType: this.company.businessType.name,
                taxId: this.company.taxId,
                type: this.user.userType.type,
                brokerInfo: this.company.brokerInfo,
                carrierInfo: this.company.carrierInfo
            }).$promise
            .then((data) => {
                this.user.companyId = data._id;
                return this.Auth.updateUser(this.user)
                .then(() => {
                    // Account created, redirect to home
                    if(this.isFromAdmin)
                        //If the route is from admin
                        this.$location.path('/admin');
                    else
                        // Account created, redirect to home
                        this.$location.path('/');
                })
                // Account created, redirect to home
                // this.$location.path('/signup');
            })
            .catch(err => {
                err = err.data;
                this.errors = {};
                // Update validity of form fields that match the mongoose errors
                if (typeof err !== 'undefined' && typeof err.errors !== 'undefined') {
                    angular.forEach(err.errors, (error, field) => {
                        form[field].$setValidity('mongoose', false);
                        this.errors[field] = error.message;
                    });
                }
            });
        }
    }

    registerUserAndGotoNext(userform) {
        this.userSubmitted = true;
        if (userform.$valid) {
            return this.Auth.createUser({
                    name: this.user.name,
                    email: this.user.email,
                    password: this.user.password,
                    phone: this.user.phone,
                    role: this.user.role,
                    primary: true
                }, this.isFromAdmin)
                .then((data) => {
                    this.user._id = data.user._id;
                    this.isUserSignup = false;
                    // Account created, redirect to home
                    //  this.$location.path('/signup');
                })
                .catch(err => {
                    err = err.data;
                    this.errors = {};

                    // Update validity of form fields that match the mongoose errors
                    if (typeof err.errors !== 'undefined') {
                        angular.forEach(err.errors, (error, field) => {
                            userform[field].$setValidity('mongoose', false);
                            this.errors[field] = error.message;
                        });
                    }

                });
        }
    }
}