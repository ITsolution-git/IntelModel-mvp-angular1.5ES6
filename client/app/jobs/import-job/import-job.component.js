'use strict';
const angular = require('angular');
const ngRoute = require('angular-route');


import routes from './import-job.routes';

export class ImportJobComponent {
    /*@ngInject*/
    constructor($routeParams,$location) {
        this.message = 'Hello';
        this.routeParams = $routeParams;
        this.location = $location;
    }

    $onInit() {
        
    }

    save() {

        console.log("saved");
        this.location.path("/jobs");

    };

    cancel () {

        console.log("saved");
        this.location.path("/jobs");
    };
}

export default angular.module('intelmodalApp.importJob', [ngRoute])
    .config(routes)
    .component('importJob', {
        template: require('./import-job.html'),
        controller: ImportJobComponent,
        controllerAs: 'importJobCtrl'
    })
    .name;
