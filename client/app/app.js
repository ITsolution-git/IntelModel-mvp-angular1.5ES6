'use strict';

import angular from 'angular';
// import ngAnimate from 'angular-animate';
import ngCookies from 'angular-cookies';
import ngResource from 'angular-resource';
import ngSanitize from 'angular-sanitize';
import 'angular-socket-io';
const ngRoute = require('angular-route');

import uiBootstrap from 'angular-ui-bootstrap';
// import ngMessages from 'angular-messages';
// import ngValidationMatch from 'angular-validation-match';


import {
  routeConfig
} from './app.config';

import _Auth from '../components/auth/auth.module';
import account from './account';
import admin from './admin';
import navbar from '../components/navbar/navbar.component';
import footer from '../components/footer/footer.component';
import main from './main/main.component';
import constants from './app.constants';
import util from '../components/util/util.module';
import socket from '../components/socket/socket.service';
import JobsComponent from './jobs/jobs.component';
import ExportJobComponent from './jobs/export-job/export-job.component';
import CrossTownComponent from './jobs/cross-town/cross-town.component'
import Playground from './playground/playground.component';
import ImportJobComponent from './jobs/import-job/import-job.component';
import DispatchComponent from './dispatch/dispatch.component';
import AssignmentComponent from './assignment/assignment.component';
import ReportsComponent from './reports/reports.component';
import {ngTableModule} from 'ng-table';
import 'angular-timeline';
import 'ui-select';

import './app.css';

angular.module('intelmodalApp', [ngCookies, ngResource, ngSanitize, 'btford.socket-io', ngRoute,
  uiBootstrap, ngTableModule.name, 'angular-timeline', 'ui.select', _Auth, account, admin,
  JobsComponent, ExportJobComponent, ImportJobComponent, CrossTownComponent,
  DispatchComponent,
  AssignmentComponent,
  ReportsComponent,
  Playground, navbar, footer, main, constants, socket, util
])
  .config(routeConfig)
  .run(function($rootScope, $location, Auth) {
    'ngInject';
    // Redirect to login if route requires auth and you're not logged in

    $rootScope.$on('$stateChangeStart', function(event, next) {
      Auth.isLoggedIn(function(loggedIn) {
        if(next.authenticate && !loggedIn) {
          $location.path('/login');
        }
      });
    });
  });

angular.element(document)
  .ready(() => {
    angular.bootstrap(document, ['intelmodalApp'], {
      strictDi: true
    });
  });
