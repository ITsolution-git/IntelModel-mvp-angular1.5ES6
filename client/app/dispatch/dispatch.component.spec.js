'use strict';

describe('Component: DispatchComponent', function() {
  // load the controller's module
  beforeEach(module('intelmodalApp.dispatch'));

  var DispatchComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    DispatchComponent = $componentController('dispatch', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
