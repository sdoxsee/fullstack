'use strict';

angular.module('fullstackApp')
  .controller('ProfileCtrl', function ($scope) {
    $scope.message = 'Hello';

    // we will store all of our form data in this object
    $scope.formData = {};

    // function to process the form
    $scope.processForm = function() {
      alert('awesome!');
    };
  });
