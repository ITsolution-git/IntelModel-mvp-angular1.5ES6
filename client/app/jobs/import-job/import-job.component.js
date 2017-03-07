'use strict';
const angular = require('angular');
const ngRoute = require('angular-route');


import routes from './import-job.routes';

export class ImportJobComponent {
    /*@ngInject*/
    constructor() {
        this.message = 'Hello';
    }

    $onInit() {
        this.items = this.resolve.items;
    }

    ok() {
        console.info("in handle close");
        this.modalInstance.close(['1']);
    };

    cancel () {
        console.info("in handle dismiss");
        this.modalInstance.dismiss("cancel");
    };
}

export default angular.module('intelmodalApp.importJob', [ngRoute])
    .config(routes)
    .component('importJob', {
        template: require('./import-job.html'),
        bindings: {
            modalInstance: "<",
            resolve: "<"
        },
        controller: ImportJobComponent,
        controllerAs: 'importJobCtrl'
    })
    .name;
