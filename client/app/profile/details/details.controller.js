'use strict';

angular.module('fullstackApp')
  .controller('DetailsCtrl', function ($scope) {
    $scope.message = 'Hello';

    $scope.genders = [
      {'name':'profile.details.gender.options.female'},
      {'name':'profile.details.gender.options.male'},
      {'name':'profile.details.gender.options.undifferentiated'}
    ];
  });
