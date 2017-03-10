'use strict';
const angular = require('angular');
const ngRoute = require('angular-route');


import routes from './reports.routes';

export class ReportsComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('intelmodalApp.reports', [ngRoute])
  .config(routes)
  .component('reports', {
    template: require('./reports.html'),
    controller: ReportsComponent,
    controllerAs: 'reportsCtrl'
  })
  .name;
