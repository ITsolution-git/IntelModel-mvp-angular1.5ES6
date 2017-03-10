'use strict';

describe('Component: AssignmentComponent', function() {
  // load the controller's module
  beforeEach(module('intelmodalApp.assignment'));

  var AssignmentComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    AssignmentComponent = $componentController('assignment', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
