'use strict';
const angular = require('angular');
const ngRoute = require('angular-route');
import { NgTableParams } from 'ng-table';

import routes from './jobs.routes';

export class JobsComponent {

  /*@ngInject*/
  constructor() {
    var data = [
      { name: "Job1", status: 'In Transit', containers:3, type: 'Import', updated: '3 mins ago' },
      { name: "Job2", status: 'Delivered',  containers:2, type: 'Export', updated: '3 mins ago' },
      { name: "Job3", status: 'In Transit', containers:1, type: 'Export', updated: '3 mins ago' },
      { name: "Job4", status: 'Dispatched', containers:3, type: 'Cross Town', updated: '3 mins ago' },
      { name: "Job5", status: 'In Transit', containers:4, type: 'Import', updated: '3 mins ago' },
      { name: "Job6", status: 'NEW', containers:2, type: 'Export', updated: '3 mins ago' },
      { name: "Job7", status: 'In Transit', containers:1, type: 'Import', updated: '3 mins ago' }
    ];
    this.tableParams = new NgTableParams({}, { dataset: data});
  }

  addImportJob() {

  }
}

export default angular.module('intelmodalApp.jobs', [ngRoute])
  .config(routes)
  .component('jobs', {
    template: require('./jobs.html'),
    controller: JobsComponent,
    controllerAs: 'jobsCtrl'
  })
  .name;
