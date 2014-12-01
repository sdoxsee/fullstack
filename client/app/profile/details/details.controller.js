'use strict';

angular.module('fullstackApp')
  .controller('DetailsCtrl', function ($scope) {
    $scope.message = 'Hello';

    $scope.genders = [
      {'name':'profile.details.gender.options.female'},
      {'name':'profile.details.gender.options.male'},
      {'name':'profile.details.gender.options.undifferentiated'}
    ];

    $scope.provinces = [
      {'name':'profile.details.province.options.ab'},
      {'name':'profile.details.province.options.bc'},
      {'name':'profile.details.province.options.mb'},
      {'name':'profile.details.province.options.nb'},
      {'name':'profile.details.province.options.nl'},
      {'name':'profile.details.province.options.nt'},
      {'name':'profile.details.province.options.ns'},
      {'name':'profile.details.province.options.nu'},
      {'name':'profile.details.province.options.on'},
      {'name':'profile.details.province.options.pe'},
      {'name':'profile.details.province.options.qc'},
      {'name':'profile.details.province.options.sk'},
      {'name':'profile.details.province.options.yt'},
    ];

    $scope.maritalStatuses = [
      {'name':'profile.details.maritalStatus.options.married'},
      {'name':'profile.details.maritalStatus.options.single'}
    ];

    $scope.smokingStatuses = [
      {'name':'profile.details.smokingStatus.options.no'},
      {'name':'profile.details.smokingStatus.options.yes'}
    ];

    $scope.earningFrequencies = [
      {'name':'profile.details.earningFrequency.options.hourly'},
      {'name':'profile.details.earningFrequency.options.daily'}
    ];
  });
