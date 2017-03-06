'use strict';

describe('Component: JobsComponent', function() {
  // load the controller's module
  beforeEach(module('intelmodalApp.jobs'));

  var JobsComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    JobsComponent = $componentController('jobs', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
