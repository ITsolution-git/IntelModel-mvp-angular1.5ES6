'use strict';

import angular from 'angular';
import routes from './admin.routes';
import AdminController from './admin.controller';
import NewUserModalController from './newuser.modal.controller';

export default angular.module('intelmodalApp.admin', ['intelmodalApp.auth', 'ngRoute'])
  .config(routes)
  .controller('AdminController', AdminController)
  .controller('NewUserModalController', NewUserModalController)
  .name;
