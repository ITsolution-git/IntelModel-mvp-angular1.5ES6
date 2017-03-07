'use strict';

export default function($routeProvider) {
  'ngInject';
  $routeProvider
    .when('/jobs/exportJob', {
      template: '<export-job></export-job>'
    });
}
