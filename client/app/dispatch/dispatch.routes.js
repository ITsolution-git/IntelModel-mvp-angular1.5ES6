'use strict';

export default function($routeProvider) {
  'ngInject';
  $routeProvider
    .when('/dispatch', {
      template: '<dispatch></dispatch>'
    });
}
