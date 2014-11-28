'use strict';

angular.module('fullstackApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap'
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

    $urlRouterProvider
      .when('/profile', '/profile/details')
      .when('/enrollment/profile', '/enrollment/profile/details')
      .otherwise('/main');

    $locationProvider.html5Mode(true);
  });
