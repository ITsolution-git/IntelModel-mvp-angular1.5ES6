'use strict';

import angular from 'angular';
import constants from '../../app/app.constants';
import util from '../util/util.module';

import {
    CompanyResource
} from './company.service';

export default angular.module('intelmodalApp.company.service', [constants, util])
    .factory('Company', CompanyResource)
    .name;  