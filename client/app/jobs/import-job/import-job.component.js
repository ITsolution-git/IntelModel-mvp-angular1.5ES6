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

        this.job =
        { _id:2,name: "Job2", status: 'NEW', progress: 0,
            alerts: [{msg: 'Containers are still under Customs Exams', date: new Date()}],
            description: {
                type: 'Import',
                reference: 'xxxx',
                billOfLading: 'yyyyy',
                portOfDischarge: 'LB',
                dateOfDischarge: new Date(),
                marineCarrier: 'xxxxx',
                terminal:'ITS',
                vesselName:'COSCO',
                voyageNumber:'MSCO019101',
                shipper:'A Logistics',
                consignee:'AZ Forwarder',
                deliveryAddress: 'location',
                lastFreeDate: new Date(),
                lastFreeReturnDate: new Date(),
                jobType: 'Pick up & Drop',
                containers: [
                    {'number':'XXXU1234700', type: '22GP', status: 'NEW', readyForDispatch: false,
                        progress:0,  POD:'', location: {}, updated: new Date(), note:'NOTE'},
                    {'number':'XXMU1234600', type: '22GP', status: 'NEW', readyForDispatch: false,
                        progress:0,  POD:'', location: {}, updated: new Date(), note:'NOTE'}
                ]
            },
            constrains: { before: new Date(), after: null,  on: null,  conditions: [], remarks:'waiting for container to be ready to dispatch'},
            activities: [{
                type: 'info',
                title: 'XXMU1234600 Dispatched',
                when: '11 hours ago via Twitter',
                content: 'Some awesome content.'
            }, {
                type: 'warning',
                title: 'XXXU1234700 Dispatching issue',
                when: '12 hours ago via Twitter',
                content: 'More awesome content.'
            }],
            //quote: If a job is sent, there will be no quote.
            updated: new Date()
        }
    }

    $onInit() {

    }

    save() {

    };

    cancel () {

    };

    sendForQuote() {

    }

    confirmQuote() {

    }
}

export default angular.module('intelmodalApp.importJob', [ngRoute])
    .config(routes)
    .component('importJob', {
        template: require('./import-job.html'),
        controller: ImportJobComponent,
        controllerAs: 'importJobCtrl'
    })
    .name;
