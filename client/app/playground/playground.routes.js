'use strict';

export default function($routeProvider) {
  'ngInject';
  $routeProvider
    .when('/playground', {
      template: '<playground></playground>'
    });
}
