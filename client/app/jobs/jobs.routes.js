'use strict';

export default function($routeProvider) {
  'ngInject';
  $routeProvider
    .when('/jobs', {
      template: '<jobs></jobs>'
    });
}
