'use strict';

angular.module('fullstackApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('profile.dependents', {
        url: '/dependents',
        templateUrl: 'app/profile/dependents/dependents.html',
        controller: 'DependentsCtrl'
      })
      .state('enrollment.profile.dependents', {
        url: '/dependents',
        templateUrl: 'app/profile/dependents/dependents.html',
        controller: 'DependentsCtrl'
      });
  });
