'use strict';
const angular = require('angular');
const ngRoute = require('angular-route');


import routes from './dispatch.routes';

export class DispatchComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('intelmodalApp.dispatch', [ngRoute])
  .config(routes)
  .component('dispatch', {
    template: require('./dispatch.html'),
    controller: DispatchComponent,
    controllerAs: 'dispatchCtrl'
  })
  .name;
