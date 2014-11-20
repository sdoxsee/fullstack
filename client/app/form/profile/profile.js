'use strict';

angular.module('fullstackApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('form.profile', {
        url: '/form.profile',
        templateUrl: 'app/form/profile/profile.html',
        controller: 'ProfileCtrl'
      });
  });
