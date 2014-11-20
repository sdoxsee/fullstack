'use strict';

angular.module('fullstackApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.awesomeThings = [];

    // $http.get('/api/things').success(function(awesomeThings) {
    //   $scope.awesomeThings = awesomeThings;
    // });

    $scope.awesomeThings = [
      {name: 'My Profile', state: 'profile.details'},
      {name: 'Enroll Now', state: 'enrollment.profile.details'}
      // .profile'}
    ];

  });
