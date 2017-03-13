'use strict';

/* globals sinon, describe, expect, it */

var proxyquire = require('proxyquire').noPreserveCache();

var scheduleCtrlStub = {
  index: 'scheduleCtrl.index',
  show: 'scheduleCtrl.show',
  create: 'scheduleCtrl.create',
  upsert: 'scheduleCtrl.upsert',
  patch: 'scheduleCtrl.patch',
  destroy: 'scheduleCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var scheduleIndex = proxyquire('./index.js', {
  express: {
    Router() {
      return routerStub;
    }
  },
  './schedule.controller': scheduleCtrlStub
});

describe('Schedule API Router:', function() {
  it('should return an express router instance', function() {
    expect(scheduleIndex).to.equal(routerStub);
  });

  describe('GET /api/schedules', function() {
    it('should route to schedule.controller.index', function() {
      expect(routerStub.get
        .withArgs('/', 'scheduleCtrl.index')
        ).to.have.been.calledOnce;
    });
  });

  describe('GET /api/schedules/:id', function() {
    it('should route to schedule.controller.show', function() {
      expect(routerStub.get
        .withArgs('/:id', 'scheduleCtrl.show')
        ).to.have.been.calledOnce;
    });
  });

  describe('POST /api/schedules', function() {
    it('should route to schedule.controller.create', function() {
      expect(routerStub.post
        .withArgs('/', 'scheduleCtrl.create')
        ).to.have.been.calledOnce;
    });
  });

  describe('PUT /api/schedules/:id', function() {
    it('should route to schedule.controller.upsert', function() {
      expect(routerStub.put
        .withArgs('/:id', 'scheduleCtrl.upsert')
        ).to.have.been.calledOnce;
    });
  });

  describe('PATCH /api/schedules/:id', function() {
    it('should route to schedule.controller.patch', function() {
      expect(routerStub.patch
        .withArgs('/:id', 'scheduleCtrl.patch')
        ).to.have.been.calledOnce;
    });
  });

  describe('DELETE /api/schedules/:id', function() {
    it('should route to schedule.controller.destroy', function() {
      expect(routerStub.delete
        .withArgs('/:id', 'scheduleCtrl.destroy')
        ).to.have.been.calledOnce;
    });
  });
});
