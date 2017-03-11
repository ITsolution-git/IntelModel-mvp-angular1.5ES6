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
                alerts: [ { msg: 'Approaching LFD', date: new Date() } ],
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
                        {   'number':'XXXU1234700', type: '22GP', status: '', readyForDispatch: true,
                            progress:90,  POD:'', location: null, updated: new Date(), note:'On hold for exam',
                            trips: [
                                {
                                    reference: "Job1-XXXU1234700-1",
                                    from: { port: 'LB/OOCL' }, // port: {port code, terminal code}
                                    to: { address: '897 190th Street, Torrance, CA 90501', type: 'residential'},
                                    constraints: {before: new Date(), after: null,  on: null,  preconditions: [], remarks:'waiting for container to be ready to dispatch'},
                                    note: 'note for this trip'
                                }]
                        },
                        {'number':'XXMU1234600', type: '42GP', status: 'In Transit', readyForDispatch: true,
                            progress:15,  POD:'', location: {lat: 33.7395, lng: -118.254}, updated: new Date(), note:'NOTE',
                            trips: [
                                {
                                    reference: "Job1-XXMU1234600-1", //reference naming convention: job - trip#
                                    from: { port: 'LB/OOCL' }, // port: {port code, terminal code}
                                    to: { address: '897 190th Street, Torrance, CA 90501', type: 'residential'},
                                    constraints: {before: new Date(), after: null,  on: null,  preconditions: [], remarks:'waiting for container to be ready to dispatch'},
                                    note: 'note for this trip'
                                }]
                        }
                    ]
                },
                constrains: { before: new Date(), after: null,  on: null,  preconditions: [], remarks:'waiting for container to be ready to dispatch'},
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
                }],
                //if a job is a quote, waiting for being dispatched
                quote: {
                    charge: 480.00,
                    note: 'note',
                    confirmed: true
                },
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
                        //sometimes for export job, we don't have the actual containers, we will use
                        // the generated _id to represent the container.
                        {_id: 1, 'number':'', type: '22GP', status: 'NEW', readyForDispatch: false,
                            progress:0,  POD:'', location: {}, updated: new Date(), note:'NOTE',
                            trips: [
                                {
                                    reference: "Job3-1", //reference naming convention: job - container# - trip#, if container is available at time of creation of trips.
                                    from: { port: 'LB/OOCL' }, // port: {port code, terminal code}
                                    to: { address: '897 190th Street, Torrance, CA 90501', type: 'residential'},
                                    constraints: {before: new Date(), after: null,  on: null,  preconditions: [], remarks:''},
                                    note: 'pick up empty container'
                                },
                                {
                                    reference: "Job3-2", //reference naming convention: job - container# - trip#
                                    from: { address: '897 190th Street, Torrance, CA 90501', type: 'residential'},
                                    to: { port: 'LB/OOCL' }, // port: {port code, terminal code}
                                    constraints: {before: new Date(), after: null,  on: null,  preconditions: { trips: ['Job3-1']}, remarks:''},
                                    note: 'drop off loaded container'
                                }]
                        },
                        {_id:2, 'number':'', type: '42GP', status: 'NEW', readyForDispatch: false,
                            progress:0,  POD:'', location: {}, updated: new Date(), note:'NOTE',
                            trips:
                                [{
                                    reference: "Job3-3", //reference naming convention: job - [container# ]- trip#,
                                    from: { port: 'LB/OOCL'}, // port: {port code, terminal code}
                                    to: { address: '897 190th Street, Torrance, CA 90501', type: 'residential'},
                                    constraints: {before: new Date(), after: null,  on: null,  preconditions: [], remarks:''},
                                    note: 'pick up empty container',
                                    assignee: { name: 'A speed', id: 'some id'}
                                },
                                    {
                                        reference: "Job3-4", //reference naming convention: job - container# - trip#
                                        from: { address: '897 190th Street, Torrance, CA 90501', type: 'residential'},
                                        to: { port: 'LB/OOCL'}, // port: {port code, terminal code}
                                        constraints: {before: new Date(), after: null,  on: null,  preconditions: {trips: ['Job3-3']}, remarks:''},
                                        note: 'drop off loaded container',
                                        assignee: { name: 'A speed', id: 'some id'}
                                    }]
                        }
                    ]
                },
                constrains: { before: new Date(), after: null,  on: null,  preconditions: [], remarks:'waiting for container to be ready to dispatch'},
                activities: [],
                //quote: If a job is new
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
                            progress:0,  POD:'', location: {address:'897 190th St, Gardena, CA 90502'}, updated: new Date(), note:'NOTE',
                            trips: []

                        },
                        {'number':'', type: '22GP', status: '', readyForDispatch: false,
                            progress:0,  POD:'', location: {address:'897 190th St, Gardena, CA 90502'}, updated: new Date(), note:'NOTE',
                            trips: []
                        }
                    ]
                },
                constrains: { before: new Date(), after: null,  on: null,  preconditions: [], remarks:'waiting for container to be ready to dispatch'},
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

        this.dispatched = [
            {
                reference: "dispatch-reference-0",
                date: new Date(),
                tripBundle: [ 'trip-id-reference-6', 'trip-id-reference-7'],
                bids: [
                    {providerId: 'id-reference-1', name: 'A Speed', amount: null, rating: 'A', status: 'Bidding', updated: new Date()},
                    {providerId: 'id-reference-2', name: 'B Speed', amount: null, rating: 'B', status: 'Bidding', updated: new Date()}
                ]
            },
            {
                reference: "dispatch-reference-1",
                date: new Date(),
                tripBundle: [ 'trip-id-reference-1', 'trip-id-reference-2'],
                bids: [
                    {providerId: 'id-reference-1', name: 'A Speed', amount: 340.00, rating: 'A', status: 'Pending', updated: new Date()},
                    {providerId: 'id-reference-2', name: 'B Speed', amount: 320.00, rating: 'B', status: 'Pending', updated: new Date()}
                ]
            },
            {
                reference: "dispatch-reference-2",
                date: new Date(),
                tripBundle: [ 'trip-id-reference-3', 'trip-id-reference-4'],
                bids: [
                    //if a company's bid is accepted, in the job document, assignee of the trips will be set to this company
                    {providerId: 'id-reference-1', name: 'A Speed', amount: 340.00, rating: 'A', status: 'Accepted', updated: new Date()},
                    {providerId: 'id-reference-3', name: 'C Speed', amount: 320.00, rating: 'B', status: 'Declined', updated: new Date()}
                ]
            }
        ];
    }

    sendQuote(job) {
        //add a quote to job
        //notify customer (role='user')
    }
    addTrip(job, trip) {

    }

    updateTrip(job, trip) {

    }

    removeTrip(job, trip) {

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
