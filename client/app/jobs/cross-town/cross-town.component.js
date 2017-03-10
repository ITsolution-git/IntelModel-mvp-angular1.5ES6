'use strict';
const angular = require('angular');
const ngRoute = require('angular-route');


import routes from './cross-town.routes';

export class CrossTownComponent {
    /*@ngInject*/
    constructor() {
        this.message = 'Hello';
        this.job =
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
            //quote: If a job is sent, there will be no quote.
            updated: new Date()
        }
    }

    save() {

    };

    cancel () {

    };

    sendForQuote() {

    }

    confirmQuote() {

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
