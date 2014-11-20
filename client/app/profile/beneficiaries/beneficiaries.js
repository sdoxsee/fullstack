'use strict';

angular.module('fullstackApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('profile.beneficiaries', {
        url: '/beneficiaries',
        templateUrl: 'app/profile/beneficiaries/beneficiaries.html',
        controller: 'BeneficiariesCtrl'
      })
      .state('enrollment.profile.beneficiaries', {
        url: '/beneficiaries',
        templateUrl: 'app/profile/beneficiaries/beneficiaries.html',
        controller: 'BeneficiariesCtrl'
      });
  });
