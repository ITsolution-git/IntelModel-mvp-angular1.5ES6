'use strict';

describe('Component: PlaygroundComponent', function() {
  // load the controller's module
  beforeEach(module('intelmodalApp.playground'));

  var PlaygroundComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    PlaygroundComponent = $componentController('playground', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
