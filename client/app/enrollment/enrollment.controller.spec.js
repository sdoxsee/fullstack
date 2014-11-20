'use strict';

describe('Controller: EnrollmentCtrl', function () {

  // load the controller's module
  beforeEach(module('fullstackApp'));

  var EnrollmentCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EnrollmentCtrl = $controller('EnrollmentCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
