'use strict';
const angular = require('angular');
const ngRoute = require('angular-route');


import routes from './export-job.routes';

export class ExportJobComponent {
  /*@ngInject*/
  constructor($routeParams) {
    this.message = 'Hello';
      this.routeParams = $routeParams;
      console.log("routeParam",$routeParams);
  }

  $onInit() {

  }
}

export default angular.module('intelmodalApp.exportJob', [ngRoute])
  .config(routes)
  .component('exportJob', {
    template: require('./export-job.html'),
    controller: ExportJobComponent,
    controllerAs: 'exportJobCtrl'
  })
  .name;
