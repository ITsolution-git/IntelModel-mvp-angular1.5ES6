'use strict';

import angular from 'angular';
import {
  UtilService
} from './util.service';

export default angular.module('intelmodalApp.util', [])
  .factory('Util', UtilService)
  .name;
