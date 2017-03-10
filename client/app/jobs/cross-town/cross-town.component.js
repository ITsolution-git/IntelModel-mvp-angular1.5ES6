'use strict';
const angular = require('angular');
const ngRoute = require('angular-route');


import routes from './cross-town.routes';

export class CrossTownComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('intelmodalApp.crossTown', [ngRoute])
  .config(routes)
  .component('crossTown', {
    template: require('./cross-town.html'),
    controller: CrossTownComponent,
    controllerAs: 'crossTownCtrl'
  })
  .name;
