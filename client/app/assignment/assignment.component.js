'use strict';
const angular = require('angular');
const ngRoute = require('angular-route');


import routes from './assignment.routes';

export class AssignmentComponent {
    /*@ngInject*/
    constructor() {
        this.message = 'Hello';
        this.assignments = [
            {
                reference: "dispatch-reference-0",
                date: new Date(),
                trips: [
                    {   reference: 'trip-id-reference-2',
                        from: { port: 'LB/OOCL' }, // port: {port code, terminal code}
                        to: { address: '897 190th Street, Torrance, CA 90501', type: 'residential'},
                        constraints: {before: new Date(), after: null,  on: null,  preconditions: [], remarks:''},
                        container: {id: 'MSCO010101', type: '22GP'},
                        schedule: {time: new Date(), driver: "Joe Smith"},
                        consignee: 'AZ Logistics',
                        note: 'pick up empty container'
                    },
                    {   reference: 'trip-id-reference-1',
                        from: { address: '897 190th Street, Torrance, CA 90501', type: 'residential'},
                        to: { port: 'LB/OOCL' }, // port: {port code, terminal code},
                        container: {id: 'MSCO010101', type: '22GP'},
                        consignee: 'AZ Logistics',
                        constraints: {before: new Date(), after: null,  on: null,  preconditions: [], remarks:''},
                        schedule: {time: new Date(), driver: "Joe Smith"},
                        note: 'pick up empty container'
                    }]
            },
            {
                reference: "dispatch-reference-1",
                date: new Date(),
                trips: [
                    {   reference: 'trip-id-reference-3',
                        from: { port: 'LB/OOCL' }, // port: {port code, terminal code}
                        to: { address: '897 190th Street, Torrance, CA 90501', type: 'residential'},
                        constraints: {before: new Date(), after: null,  on: null,  preconditions: [], remarks:''},
                        container: {id: 'MSCO010101', type: '22GP'},
                        schedule: null,
                        consignee: 'AZ Logistics',
                        note: 'pick up empty container'
                    },
                    {   reference: 'trip-id-reference-4',
                        from: { address: '897 190th Street, Torrance, CA 90501', type: 'residential'},
                        to: { port: 'LB/OOCL' }, // port: {port code, terminal code},
                        container: {id: 'MSCO010101', type: '22GP'},
                        consignee: 'AZ Logistics',
                        constraints: {before: new Date(), after: null,  on: null,  preconditions: [], remarks:''},
                        schedule: null,
                        note: 'pick up empty container'
                    }]
            }

        ];

    }

    scheduleTrip(trip, time, driver) {
        trip.schedule = {time: time, driver: driver};
        //save and notify dispatcher via websocket message
    }

    declineAssignment(assignment) {
        //notify dispatcher that the provider can't fulfill the assignments
        //dispatch has to find other providers.
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
