'use strict';

angular.module('fullstackApp')
  .controller('NavbarCtrl', function ($scope, $location, $translate, LanguageService) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    }];

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };

    $scope.changeLanguage = function (languageKey) {
      $translate.use(languageKey);

      LanguageService.getBy(languageKey).then(function(languages) {
        $scope.languages = languages;
      });
    };

    LanguageService.getBy().then(function (languages) {
      $scope.languages = languages;
    });
  });
