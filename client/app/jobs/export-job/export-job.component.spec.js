'use strict';

describe('Component: ExportJobComponent', function() {
  // load the controller's module
  beforeEach(module('intelmodalApp.exportJob'));

  var ExportJobComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    ExportJobComponent = $componentController('export-job', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
