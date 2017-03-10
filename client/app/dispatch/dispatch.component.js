'use strict';
const angular = require('angular');
const ngRoute = require('angular-route');


import routes from './dispatch.routes';

export class DispatchComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
      this.jobs = [
          { _id:1,
              name: "Job1", status: 'In Transit/Dispatch', progress: 40,
              alerts: [{msg: 'Approaching LFD', date: new Date()}],
              description: {
                  type: 'Import',
                  reference: 'xxxx',
                  billOfLading: 'yyyyy',
                  portOfDischarge: 'LB',
                  dateOfDischarge: new Date(),
                  marineCarrier: 'xxxxx',
                  terminal:'ITS',
                  vesselName:'COSCO',
                  voyageNumber:'MSCO019101',
                  shipper:'A Logistics',
                  consignee:'AZ Forwarder',
                  deliveryAddress: '897 190Th Street, Torrance, CA 90502',
                  lastFreeDate: new Date(),
                  lastFreeReturnDate: new Date(),
                  jobType: 'Live Load',
                  containers: [
                      {'number':'XXXU1234700', type: '22GP', status: 'In Transit', readyForDispatch: true,
                          progress:90,  POD:'', location: {lat: 33.8395, lng: -118.354}, updated: new Date(), note:'NOTE'},
                      {'number':'XXMU1234600', type: '42GP', status: 'In Transit', readyForDispatch: true,
                          progress:15,  POD:'', location: {lat: 33.7395, lng: -118.254}, updated: new Date(), note:'NOTE'},
                      {'number':'XNOU1234500', type: '22GP', status: 'Dispatched', readyForDispatch: true,
                          progress:15,  POD:'', location: {}, updated: new Date(), note:'NOTE'}
                  ]
              },
              constrains: { before: new Date(), after: null,  on: null,  conditions: [], remarks:'waiting for container to be ready to dispatch'},
              /**
               container type: 22GP, 22PC, 22U1, 22VP, 22RT, 22TO
               42GP, 42PC, 42U1, 40VP, 42HQ,
               L5GO
               */
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
              }, {
                  type: 'info',
                  title: 'XXXU1234700 is in Transit',
                  image: '<img class="img-responsive" src="http://www.freeimages.com/assets/183333/1833326510/wood-weel-1444183-m.jpg">',
                  contentHtml: "simple content",
                  link: '<a href="">See details</a>'
              }],
              //if a job is a quote
              quote: {
                  charge: 480.00,
                  note: 'note',
                  confirmed: true
              },
              updated: new Date()
          },

          { _id:2,name: "Job2", status: 'NEW', progress: 0,
              alerts: [{msg: 'Containers are still under Customs Exams', date: new Date()}],
              description: {
                  type: 'Import',
                  reference: 'xxxx',
                  billOfLading: 'yyyyy',
                  portOfDischarge: 'LB',
                  dateOfDischarge: new Date(),
                  marineCarrier: 'xxxxx',
                  terminal:'ITS',
                  vesselName:'COSCO',
                  voyageNumber:'MSCO019101',
                  shipper:'A Logistics',
                  consignee:'AZ Forwarder',
                  deliveryAddress: 'location',
                  lastFreeDate: new Date(),
                  lastFreeReturnDate: new Date(),
                  jobType: 'Pick up & Drop',
                  containers: [
                      {'number':'XXXU1234700', type: '22GP', status: 'NEW', readyForDispatch: false,
                          progress:0,  POD:'', location: {}, updated: new Date(), note:'NOTE'},
                      {'number':'XXMU1234600', type: '22GP', status: 'NEW', readyForDispatch: false,
                          progress:0,  POD:'', location: {}, updated: new Date(), note:'NOTE'}
                  ]
              },
              constrains: { before: new Date(), after: null,  on: null,  conditions: [], remarks:'waiting for container to be ready to dispatch'},
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
              //quote: If a job is sent, there will be no quote.
              updated: new Date()
          },

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
              constrains: { before: new Date(), after: null,  on: null,  conditions: [], remarks:'waiting for container to be ready to dispatch'},
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
          },

          { _id:4,name: "Job4", status: 'NEW', progress: 0,
              alerts: [],
              description: {
                  type: 'Cross Town',
                  reference: 'xxxx',
                  shipper:'A Logistics',
                  consignee:'AZ Forwarder',
                  pickupAddress: '897 190th St, Gardena, CA 90502',
                  deliveryAddress: '9111 S La Cienega Blvd, Inglewood, CA 90301',
                  jobType: 'Live Load',
                  containers: [
                      {'number':'', type: '22GP', status: '', readyForDispatch: false,
                          progress:0,  POD:'', location: {address:'897 190th St, Gardena, CA 90502'}, updated: new Date(), note:'NOTE'},
                      {'number':'', type: '22GP', status: '', readyForDispatch: false,
                          progress:0,  POD:'', location: {address:'897 190th St, Gardena, CA 90502'}, updated: new Date(), note:'NOTE'}
                  ]
              },
              constrains: { before: new Date(), after: null,  on: null,  conditions: [], remarks:'waiting for container to be ready to dispatch'},
              activities: [{
                  type: 'info',
                  title: 'XXMU1234600 Dispatched',
                  when: '11 hours ago via Twitter',
                  content: 'Some awesome content.'
              }],
              //qupte: If a job is sent, there will be no quote.
              updated: new Date()
          }
      ];
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
