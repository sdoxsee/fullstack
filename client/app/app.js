'use strict';

angular.module('fullstackApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap',
  'tmh.dynamicLocale',
  'pascalprecht.translate'
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider, tmhDynamicLocaleProvider, $translateProvider) {

    $urlRouterProvider
      .when('/profile', '/profile/details')
      .when('/enrollment/profile', '/enrollment/profile/details')
      .otherwise('/main');

    $locationProvider.html5Mode(true);

    // Initialize angular-translate
    $translateProvider.useStaticFilesLoader({
      prefix: 'assets/i18n/',
      suffix: '.json'
    });

    $translateProvider.preferredLanguage('en');

    $translateProvider.useCookieStorage();

    tmhDynamicLocaleProvider.localeLocationPattern('bower_components/angular-i18n/angular-locale_{{locale}}.js')
    tmhDynamicLocaleProvider.useCookieStorage('NG_TRANSLATE_LANG_KEY');
  });
