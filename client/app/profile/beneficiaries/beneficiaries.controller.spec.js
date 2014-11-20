'use strict';

describe('Controller: BeneficiariesCtrl', function () {

  // load the controller's module
  beforeEach(module('fullstackApp'));

  var BeneficiariesCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BeneficiariesCtrl = $controller('BeneficiariesCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
