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
            { _id:1,name: "Job1", status: 'In Transit', progress: 40,
                constrains: { before: new Date(), after: null,  on: null,  conditions: [], remarks:'waiting for container to be ready to dispatch'},  
            containers: [
                {'number':'XXXU1234700', type: '20', status: '', progress:null,  POD:'', location: {}, updated: new Date(), note:'NOTE'},
                {'number':'XXMU1234600', type: '40', status: '', progress:null,  POD:'', location: {}, updated: new Date(), note:'NOTE'},
                {'number':'XNOU1234500', type: '20', status: '', progress:null,  POD:'', location: {}, updated: new Date(), note:'NOTE'}
            ],
            type: 'Import', updated: new Date(),
            quote: {
                charge: 580.00,
                note: "quote note",
                confirmed: false
            }
        };
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
