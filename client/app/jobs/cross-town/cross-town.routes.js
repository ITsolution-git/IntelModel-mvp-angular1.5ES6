'use strict';

export default function($routeProvider) {
  'ngInject';
  $routeProvider
    .when('/jobs/cross-down', {
      template: '<cross-town></cross-town>'
    });
}
