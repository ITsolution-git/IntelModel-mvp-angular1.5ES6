'use strict';
const angular = require('angular');
const ngRoute = require('angular-route');
import ImportJobComponent from '../jobs/import-job/import-job.component';

import routes from './playground.routes';

export class PlaygroundComponent {
    /*@ngInject*/
    constructor($uibModal) {
        this.message = 'Hello';
        this.uibModal = $uibModal;
        this.items = ['1','2'];
        this.side = 'right';
        var lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. " +
                  "Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor." +
                  "Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, " +
                  "ut porta lorem lacinia consectetur. Donec ut libero sed arcu vehicula ultricies a non tortor." +
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

        this.events = [{
            badgeClass: 'info',
            badgeIconClass: 'glyphicon-map-marker',
            title: 'First heading',
            when: '11 hours ago via Twitter',
            content: 'Some awesome content.'
        }, {
            badgeClass: 'warning',
            badgeIconClass: 'glyphicon-comment',
            title: 'Second heading',
            when: '12 hours ago via Twitter',
            content: 'More awesome content.'
        }, {
            badgeClass: 'default',
            badgeIconClass: 'glyphicon-calendar',
            title: 'Third heading',
            titleContentHtml: '<img class="img-responsive" src="http://www.freeimages.com/assets/183333/1833326510/wood-weel-1444183-m.jpg">',
            contentHtml: lorem,
            footerContentHtml: '<a href="">Continue Reading</a>'
        }];
    }

    addEvent() {
        this.events.unshift({
            badgeClass: 'info',
            badgeIconClass: 'glyphicon-home',
            title: 'First heading',
            when: '3 hours ago via Twitter',
            content: 'Some awesome content.'
        });

    };


    leftAlign() {
        console.log("left");
        this.side = 'left';
    }

    rightAlign() {
        console.log("right");
        this.side = 'right';
    }

    defaultAlign () {
        console.log("default");
        this.side = ''; // or 'alternate'
    }


    openDialog() {
        var self = this;
        var modalInstance = this.uibModal.open({
            animation: true,
            component: 'importJob',
            resolve: {
                items: function() {
                    return self.items;
                }
            },
            size: "lg"
        });

        modalInstance.result.then(
            function (selectedItem) {
                console.log("Modal OK");
            }, function () {
                console.info('Modal dismissed at: ' + new Date());
            });
    }
}

export default angular.module('intelmodalApp.playground', [ngRoute])
    .config(routes)
    .component('playground', {
        template: require('./playground.html'),
        controller: PlaygroundComponent,
        controllerAs: 'playgroundCtrl'
    })
    .name;
