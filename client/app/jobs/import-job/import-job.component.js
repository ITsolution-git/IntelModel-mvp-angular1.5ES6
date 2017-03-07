'use strict';
const angular = require('angular');
const ngRoute = require('angular-route');


import routes from './import-job.routes';

export class ImportJobComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
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
