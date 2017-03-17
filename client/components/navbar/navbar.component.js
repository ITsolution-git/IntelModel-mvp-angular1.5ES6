'use strict';
/* eslint no-sync: 0 */

import angular from 'angular';

export class NavbarComponent {
  menu = [{
    title: 'Home',
    link: '/'
  },
    {
      title: 'Jobs',
      link: '/jobs'
    },
        {
      title: 'Dispatch',
      link: '/dispatch'
    },

    {
      title: 'Loads',
      link: '/assignment'
    },
    {
      title: 'Reports',
      link: '/reports'
    },
    {
      title: 'Playground',
      link: '/playground'
    }

  ];

  isCollapsed = true;

  constructor($location, Auth) {
    'ngInject';

    this.$location = $location;
    this.isLoggedIn = Auth.isLoggedInSync;
    this.isAdmin = Auth.isAdminSync;
    this.getCurrentUser = Auth.getCurrentUserSync;
  }

  isActive(route) {
    return route === this.$location.path();
  }
}

export default angular.module('directives.navbar', [])
  .component('navbar', {
    template: require('./navbar.html'),
    controller: NavbarComponent
  })
  .name;
