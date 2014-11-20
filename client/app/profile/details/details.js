'use strict';

angular.module('fullstackApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('profile.details', {
        url: '/details',
        templateUrl: 'app/profile/details/details.html',
        controller: 'DetailsCtrl'
      })
      .state('enrollment.profile.details', {
        url: '/details',
        templateUrl: 'app/profile/details/details.html',
        controller: 'DetailsCtrl'
      });
  });
