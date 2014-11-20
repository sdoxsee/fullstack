'use strict';

describe('Controller: InterestsCtrl', function () {

  // load the controller's module
  beforeEach(module('fullstackApp'));

  var InterestsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    InterestsCtrl = $controller('InterestsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
