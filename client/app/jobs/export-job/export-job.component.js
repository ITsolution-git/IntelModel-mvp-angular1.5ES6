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
      this.job = 
      { _id:3,name: "Job3", status: 'NEW', progress: 0,
        alerts: [],
        description: {
          type: 'Export',
          reference: 'xxxx',
          booking: 'booking number',
          portOfLoading: 'LB',
          dateOfDeparture: new Date(),
          marineCarrier: 'xxxxx',
          terminal:'ITS',
          vesselName:'COSCO',
          voyageNumber:'MSCO019101',
          shipper:'A Logistics',
          consignee:'AZ Forwarder',
          pickupAddress: 'a location',
          emptyStartDate: new Date(),
          fullStartDate: new Date(),
          cutOffDate: new Date(),
          jobType: 'Pick up & Drop',
          containers: [
          {'number':'', type: '22GP', status: 'NEW', readyForDispatch: false,
            progress:0,  POD:'', location: {}, updated: new Date(), note:'NOTE'},
          {'number':'', type: '42GP', status: 'NEW', readyForDispatch: false,
            progress:0,  POD:'', location: {}, updated: new Date(), note:'NOTE'}
          ]
        },
        constrains: { before: new Date(), after: null,  on: null,  preconditions: [], remarks:'waiting for container to be ready to dispatch'},
        activities: [{
            type: 'info',
            title: 'XXMU1234600 Dispatched',
            when: '11 hours ago via Twitter',
            content: 'Some awesome content.'
        }, {
            type: 'warning',
            title: 'XXXU1234700 Dispatching issue',
            when: '12 hours ago via Twitter',
            content: 'More awesome content.'
        }],
        //qupte: If a job is sent, there will be no quote.
        updated: new Date()
        };
  }

  $onInit() {

  }

  save() {

  };

  cancel () {

  };

  sendForQuote() {

  }

  confirmQuote() {
    this.job.quote.confirmed = true;
  }

  rejectQuote() {
    this.job.quote.confirmed = false;
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
