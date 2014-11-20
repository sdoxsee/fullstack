'use strict';

angular.module('fullstackApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('form.payment', {
        url: '/form.payment',
        templateUrl: 'app/form/payment/payment.html',
        controller: 'PaymentCtrl'
      });
  });
