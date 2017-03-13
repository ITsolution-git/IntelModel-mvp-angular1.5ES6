'use strict';

/* globals sinon, describe, expect, it */

var proxyquire = require('proxyquire').noPreserveCache();

var dispatchCtrlStub = {
  index: 'dispatchCtrl.index',
  show: 'dispatchCtrl.show',
  create: 'dispatchCtrl.create',
  upsert: 'dispatchCtrl.upsert',
  patch: 'dispatchCtrl.patch',
  destroy: 'dispatchCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var dispatchIndex = proxyquire('./index.js', {
  express: {
    Router() {
      return routerStub;
    }
  },
  './dispatch.controller': dispatchCtrlStub
});

describe('Dispatch API Router:', function() {
  it('should return an express router instance', function() {
    expect(dispatchIndex).to.equal(routerStub);
  });

  describe('GET /api/dispatchs', function() {
    it('should route to dispatch.controller.index', function() {
      expect(routerStub.get
        .withArgs('/', 'dispatchCtrl.index')
        ).to.have.been.calledOnce;
    });
  });

  describe('GET /api/dispatchs/:id', function() {
    it('should route to dispatch.controller.show', function() {
      expect(routerStub.get
        .withArgs('/:id', 'dispatchCtrl.show')
        ).to.have.been.calledOnce;
    });
  });

  describe('POST /api/dispatchs', function() {
    it('should route to dispatch.controller.create', function() {
      expect(routerStub.post
        .withArgs('/', 'dispatchCtrl.create')
        ).to.have.been.calledOnce;
    });
  });

  describe('PUT /api/dispatchs/:id', function() {
    it('should route to dispatch.controller.upsert', function() {
      expect(routerStub.put
        .withArgs('/:id', 'dispatchCtrl.upsert')
        ).to.have.been.calledOnce;
    });
  });

  describe('PATCH /api/dispatchs/:id', function() {
    it('should route to dispatch.controller.patch', function() {
      expect(routerStub.patch
        .withArgs('/:id', 'dispatchCtrl.patch')
        ).to.have.been.calledOnce;
    });
  });

  describe('DELETE /api/dispatchs/:id', function() {
    it('should route to dispatch.controller.destroy', function() {
      expect(routerStub.delete
        .withArgs('/:id', 'dispatchCtrl.destroy')
        ).to.have.been.calledOnce;
    });
  });
});
