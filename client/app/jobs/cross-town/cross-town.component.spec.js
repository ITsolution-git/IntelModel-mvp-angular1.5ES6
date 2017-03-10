'use strict';

describe('Component: CrossTownComponent', function() {
  // load the controller's module
  beforeEach(module('intelmodalApp.crossTown'));

  var CrossTownComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    CrossTownComponent = $componentController('cross-town', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
