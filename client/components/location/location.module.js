'use strict';

import angular from 'angular';
import constants from '../../app/app.constants';
import util from '../util/util.module';

import {
    LocationResource
} from './location.service';

export default angular.module('intelmodalApp.location.service', [constants, util])
    .factory('Location', LocationResource)
    .name;  