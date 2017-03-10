'use strict';

export default function($routeProvider) {
  'ngInject';
  $routeProvider
    .when('/assignment', {
      template: '<assignment></assignment>'
    });
}
