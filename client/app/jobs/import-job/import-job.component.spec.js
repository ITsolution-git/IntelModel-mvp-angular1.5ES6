'use strict';

describe('Component: ImportJobComponent', function() {
  // load the controller's module
  beforeEach(module('intelmodalApp.importJob'));

  var ImportJobComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    ImportJobComponent = $componentController('import-job', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
