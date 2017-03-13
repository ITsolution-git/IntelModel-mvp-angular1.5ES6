'use strict';

/* globals sinon, describe, expect, it */

var proxyquire = require('proxyquire').noPreserveCache();

var truckCtrlStub = {
  index: 'truckCtrl.index',
  show: 'truckCtrl.show',
  create: 'truckCtrl.create',
  upsert: 'truckCtrl.upsert',
  patch: 'truckCtrl.patch',
  destroy: 'truckCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var truckIndex = proxyquire('./index.js', {
  express: {
    Router() {
      return routerStub;
    }
  },
  './truck.controller': truckCtrlStub
});

describe('Truck API Router:', function() {
  it('should return an express router instance', function() {
    expect(truckIndex).to.equal(routerStub);
  });

  describe('GET /api/trucks', function() {
    it('should route to truck.controller.index', function() {
      expect(routerStub.get
        .withArgs('/', 'truckCtrl.index')
        ).to.have.been.calledOnce;
    });
  });

  describe('GET /api/trucks/:id', function() {
    it('should route to truck.controller.show', function() {
      expect(routerStub.get
        .withArgs('/:id', 'truckCtrl.show')
        ).to.have.been.calledOnce;
    });
  });

  describe('POST /api/trucks', function() {
    it('should route to truck.controller.create', function() {
      expect(routerStub.post
        .withArgs('/', 'truckCtrl.create')
        ).to.have.been.calledOnce;
    });
  });

  describe('PUT /api/trucks/:id', function() {
    it('should route to truck.controller.upsert', function() {
      expect(routerStub.put
        .withArgs('/:id', 'truckCtrl.upsert')
        ).to.have.been.calledOnce;
    });
  });

  describe('PATCH /api/trucks/:id', function() {
    it('should route to truck.controller.patch', function() {
      expect(routerStub.patch
        .withArgs('/:id', 'truckCtrl.patch')
        ).to.have.been.calledOnce;
    });
  });

  describe('DELETE /api/trucks/:id', function() {
    it('should route to truck.controller.destroy', function() {
      expect(routerStub.delete
        .withArgs('/:id', 'truckCtrl.destroy')
        ).to.have.been.calledOnce;
    });
  });
});
