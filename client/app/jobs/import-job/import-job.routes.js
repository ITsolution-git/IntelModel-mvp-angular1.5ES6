'use strict';

export default function($routeProvider) {
  'ngInject';
  $routeProvider
    .when('/jobs/importJob', {
      template: '<import-job></import-job>'
    });
}
