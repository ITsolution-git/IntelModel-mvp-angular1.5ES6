'use strict';
const angular = require('angular');
const ngRoute = require('angular-route');
import ImportJobComponent from '../jobs/import-job/import-job.component';

import routes from './playground.routes';

export class PlaygroundComponent {
    /*@ngInject*/
    constructor($uibModal) {
        this.message = 'Hello';
        this.uibModal = $uibModal;
        this.items = ['1','2'];
    }

    openDialog() {
        var self = this;
        var modalInstance = this.uibModal.open({
            animation: true,
            component: 'importJob',
            resolve: {
                items: function() {
                    return self.items;
                }
            },
            size: "lg"
        });

        modalInstance.result.then(
            function (selectedItem) {
                console.log("Modal OK");
            }, function () {
                console.info('Modal dismissed at: ' + new Date());
            });
    }
}

export default angular.module('intelmodalApp.playground', [ngRoute])
    .config(routes)
    .component('playground', {
        template: require('./playground.html'),
        controller: PlaygroundComponent,
        controllerAs: 'playgroundCtrl'
    })
    .name;
