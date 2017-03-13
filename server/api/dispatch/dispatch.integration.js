'use strict';

/* globals describe, expect, it, beforeEach, afterEach */

var app = require('../..');
import request from 'supertest';

var newDispatch;

describe('Dispatch API:', function() {
  describe('GET /api/dispatchs', function() {
    var dispatchs;

    beforeEach(function(done) {
      request(app)
        .get('/api/dispatchs')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          dispatchs = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      expect(dispatchs).to.be.instanceOf(Array);
    });
  });

  describe('POST /api/dispatchs', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/dispatchs')
        .send({
          name: 'New Dispatch',
          info: 'This is the brand new dispatch!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          newDispatch = res.body;
          done();
        });
    });

    it('should respond with the newly created dispatch', function() {
      expect(newDispatch.name).to.equal('New Dispatch');
      expect(newDispatch.info).to.equal('This is the brand new dispatch!!!');
    });
  });

  describe('GET /api/dispatchs/:id', function() {
    var dispatch;

    beforeEach(function(done) {
      request(app)
        .get(`/api/dispatchs/${newDispatch._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          dispatch = res.body;
          done();
        });
    });

    afterEach(function() {
      dispatch = {};
    });

    it('should respond with the requested dispatch', function() {
      expect(dispatch.name).to.equal('New Dispatch');
      expect(dispatch.info).to.equal('This is the brand new dispatch!!!');
    });
  });

  describe('PUT /api/dispatchs/:id', function() {
    var updatedDispatch;

    beforeEach(function(done) {
      request(app)
        .put(`/api/dispatchs/${newDispatch._id}`)
        .send({
          name: 'Updated Dispatch',
          info: 'This is the updated dispatch!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          updatedDispatch = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedDispatch = {};
    });

    it('should respond with the updated dispatch', function() {
      expect(updatedDispatch.name).to.equal('Updated Dispatch');
      expect(updatedDispatch.info).to.equal('This is the updated dispatch!!!');
    });

    it('should respond with the updated dispatch on a subsequent GET', function(done) {
      request(app)
        .get(`/api/dispatchs/${newDispatch._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          let dispatch = res.body;

          expect(dispatch.name).to.equal('Updated Dispatch');
          expect(dispatch.info).to.equal('This is the updated dispatch!!!');

          done();
        });
    });
  });

  describe('PATCH /api/dispatchs/:id', function() {
    var patchedDispatch;

    beforeEach(function(done) {
      request(app)
        .patch(`/api/dispatchs/${newDispatch._id}`)
        .send([
          { op: 'replace', path: '/name', value: 'Patched Dispatch' },
          { op: 'replace', path: '/info', value: 'This is the patched dispatch!!!' }
        ])
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          patchedDispatch = res.body;
          done();
        });
    });

    afterEach(function() {
      patchedDispatch = {};
    });

    it('should respond with the patched dispatch', function() {
      expect(patchedDispatch.name).to.equal('Patched Dispatch');
      expect(patchedDispatch.info).to.equal('This is the patched dispatch!!!');
    });
  });

  describe('DELETE /api/dispatchs/:id', function() {
    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete(`/api/dispatchs/${newDispatch._id}`)
        .expect(204)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when dispatch does not exist', function(done) {
      request(app)
        .delete(`/api/dispatchs/${newDispatch._id}`)
        .expect(404)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });
  });
});
