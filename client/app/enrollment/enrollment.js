'use strict';

angular.module('fullstackApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('enrollment', {
        url: '/enrollment',
        templateUrl: 'app/enrollment/enrollment.html',
        controller: 'EnrollmentCtrl'
      });
  });
