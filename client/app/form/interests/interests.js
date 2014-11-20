'use strict';

angular.module('fullstackApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('form.interests', {
        url: '/form.interests',
        templateUrl: 'app/form/interests/interests.html',
        controller: 'InterestsCtrl'
      });
  });
