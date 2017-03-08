'use strict';
const angular = require('angular');
const ngRoute = require('angular-route');
import { NgTableParams } from 'ng-table';

import routes from './jobs.routes';

export class JobsComponent {

  /*@ngInject*/
  constructor($location) {
    var data = [
      { _id:1,name: "Job1", status: 'In Transit', progress: 30, containers:3, type: 'Import', updated: '3 mins ago' },
      { _id:2, name: "Job2", status: 'Delivered',  progress: 100, containers:2, type: 'Export', updated: '3 mins ago' },
      { _id:3, name: "Job3", status: 'In Transit', progress: 30, containers:1, type: 'Export', updated: '3 mins ago' },
      { _id:4, name: "Job4", status: 'Dispatched', progress: 10, containers:3, type: 'Cross Town', updated: '3 mins ago' },
      { _id:5, name: "Job5", status: 'In Transit', progress: 90, containers:4, type: 'Import', updated: '3 mins ago' },
      { _id:6, name: "Job6", status: 'NEW', progress: 0, containers:2, type: 'Export', updated: '3 mins ago' },
      { _id:7, name: "Job7", status: 'In Transit', progress: 50, containers:1, type: 'Import', updated: '3 mins ago' }
    ];
    this.tableParams = new NgTableParams({}, { dataset: data});
    this.location = $location;
  }

  displayJob(job) {
    if (job.type == 'Import') {
      this.location.path("/jobs/")
    }else if(job.type=='Export') {

    }else {

    }
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
