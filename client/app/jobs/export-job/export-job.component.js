'use strict';
const angular = require('angular');
const ngRoute = require('angular-route');


import routes from './export-job.routes';

export class ExportJobComponent {
  /*@ngInject*/
  constructor($routeParams, $location) {
    this.message = 'Hello';
      this.routeParams = $routeParams;
      console.log("routeParam",$routeParams);
      this.date = new Date();
      this.format = 'yyyy/MM/dd';
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

export default angular.module('intelmodalApp.exportJob', [ngRoute])
  .config(routes)
  .component('exportJob', {
    template: require('./export-job.html'),
    controller: ExportJobComponent,
    controllerAs: 'exportJobCtrl'
  })
  .name;
