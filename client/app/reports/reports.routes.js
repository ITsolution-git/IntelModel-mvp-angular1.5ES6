'use strict';

export default function($routeProvider) {
  'ngInject';
  $routeProvider
    .when('/reports', {
      template: '<reports></reports>'
    });
}
