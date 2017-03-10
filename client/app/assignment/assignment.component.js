'use strict';
const angular = require('angular');
const ngRoute = require('angular-route');


import routes from './assignment.routes';

export class AssignmentComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('intelmodalApp.assignment', [ngRoute])
  .config(routes)
  .component('assignment', {
    template: require('./assignment.html'),
    controller: AssignmentComponent,
    controllerAs: 'assignmentCtrl'
  })
  .name;
