'use strict';
const angular = require('angular');
const ngRoute = require('angular-route');
import { NgTableParams } from 'ng-table';

import routes from './jobs.routes';

export class JobsComponent {

  /*@ngInject*/
  constructor($location) {
    var data = [
      { _id:1,name: "Job1", status: 'In Transit', progress: 40,
        containers: [
          {'number':'XXXU1234700', type: '20', status: 'In Transit', progress:90,  POD:'', location: {}, updated: new Date(), note:'NOTE'},
          {'number':'XXMU1234600', type: '40', status: 'Dispatched', progress:15,  POD:'', location: {}, updated: new Date(), note:'NOTE'},
          {'number':'XNOU1234500', type: '20', status: 'Dispatched', progress:15,  POD:'', location: {}, updated: new Date(), note:'NOTE'}
        ],
        type: 'Import', updated: '3 mins ago' },

      { _id:2, name: "Job2", status: 'Delivered',  progress: 100,
        containers: [
          {'number':'XXXU1234700', type: '20', status: 'Delivered', progress:100, POD:'POD1', location: {}, updated: new Date(), note:'NOTE'},
          {'number':'XXMU1234600', type: '40', status: 'Delivered', progress:100, POD:'POD2', location: {}, updated: new Date(), note:'NOTE'}
        ],
        type: 'Export', updated: '3 mins ago' },
      { _id:3, name: "Job3", status: 'In Transit', progress: 30,
        containers: [
          {'number':'XXXU1234700', type: '20', status: 'In Transit', progress:30, POD:'POD1', location: {}, updated: new Date(), note:'NOTE'}
        ],
        type: 'Export', updated: '3 mins ago' },
      { _id:4, name: "Job4", status: 'Dispatched', progress: 10,
        containers: [
          {'number':'XXXU1234700', type: '20', status: 'Dispatched', progress:10, POD:'', location: {}, updated: new Date(), note:'NOTE'},
          {'number':'XXMU1234600', type: '40', status: 'Dispatched', progress:10, POD:'', location: {}, updated: new Date(), note:'NOTE'},
          {'number':'XNOU1234500', type: '20', status: 'Dispatched', progress:10, POD:'', location: {}, updated: new Date(), note:'NOTE'}
        ],
        type: 'Cross Town', updated: '3 mins ago' },
      { _id:5, name: "Job5", status: 'In Transit', progress: 90,
        containers: [
          {'number':'XXXU1234700', type: '20',  status: 'In Transit', progress:90, POD:'', location: {}, updated: new Date(), note:'NOTE'},
          {'number':'XXMU1234600', type: '40',  status: 'In Transit', progress:90, POD:'', location: {}, updated: new Date(), note:'NOTE'},
          {'number':'XNOU1234500', type: '20',  status: 'In Transit', progress:90, POD:'', location: {}, updated: new Date(), note:'NOTE'},
          {'number':'XNOU1234400', type: '40H', status: 'In Transit', progress:90, POD:'', location: {}, updated: new Date(), note:'NOTE'}
        ],
        type: 'Import', updated: '3 mins ago' },
      { _id:6, name: "Job6", status: 'NEW', progress: 0,
        containers: [
          {'number':'XXXU1234700', type: '20', status: '', progress:0, POD:'', location: {}, updated: new Date(), note:'NOTE'},
          {'number':'XXMU1234600', type: '40', status: '', progress:0, POD:'', location: {}, updated: new Date(), note:'NOTE'}
        ],
        type: 'Export', updated: '3 mins ago' },
      { _id:7, name: "Job7", status: 'In Transit', progress: 50,
        containers: [
          {'number':'XXXU1234700', type: '20', status: 'In Transit', progress:50, POD:'', location: {}, updated: new Date(), note:'NOTE'}
        ],
        type: 'Import', updated: '3 mins ago' }
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

  isShowingDetails(job) {
    return job.hasOwnProperty('expanded') && job.expanded;
  }

  showDetails(job, flag) {
    job.expanded = flag;
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
