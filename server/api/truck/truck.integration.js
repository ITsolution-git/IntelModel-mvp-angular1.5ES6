'use strict';

/* globals describe, expect, it, beforeEach, afterEach */

var app = require('../..');
import request from 'supertest';

var newTruck;

describe('Truck API:', function() {
  describe('GET /api/trucks', function() {
    var trucks;

    beforeEach(function(done) {
      request(app)
        .get('/api/trucks')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          trucks = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      expect(trucks).to.be.instanceOf(Array);
    });
  });

  describe('POST /api/trucks', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/trucks')
        .send({
          name: 'New Truck',
          info: 'This is the brand new truck!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          newTruck = res.body;
          done();
        });
    });

    it('should respond with the newly created truck', function() {
      expect(newTruck.name).to.equal('New Truck');
      expect(newTruck.info).to.equal('This is the brand new truck!!!');
    });
  });

  describe('GET /api/trucks/:id', function() {
    var truck;

    beforeEach(function(done) {
      request(app)
        .get(`/api/trucks/${newTruck._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          truck = res.body;
          done();
        });
    });

    afterEach(function() {
      truck = {};
    });

    it('should respond with the requested truck', function() {
      expect(truck.name).to.equal('New Truck');
      expect(truck.info).to.equal('This is the brand new truck!!!');
    });
  });

  describe('PUT /api/trucks/:id', function() {
    var updatedTruck;

    beforeEach(function(done) {
      request(app)
        .put(`/api/trucks/${newTruck._id}`)
        .send({
          name: 'Updated Truck',
          info: 'This is the updated truck!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          updatedTruck = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedTruck = {};
    });

    it('should respond with the updated truck', function() {
      expect(updatedTruck.name).to.equal('Updated Truck');
      expect(updatedTruck.info).to.equal('This is the updated truck!!!');
    });

    it('should respond with the updated truck on a subsequent GET', function(done) {
      request(app)
        .get(`/api/trucks/${newTruck._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          let truck = res.body;

          expect(truck.name).to.equal('Updated Truck');
          expect(truck.info).to.equal('This is the updated truck!!!');

          done();
        });
    });
  });

  describe('PATCH /api/trucks/:id', function() {
    var patchedTruck;

    beforeEach(function(done) {
      request(app)
        .patch(`/api/trucks/${newTruck._id}`)
        .send([
          { op: 'replace', path: '/name', value: 'Patched Truck' },
          { op: 'replace', path: '/info', value: 'This is the patched truck!!!' }
        ])
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          patchedTruck = res.body;
          done();
        });
    });

    afterEach(function() {
      patchedTruck = {};
    });

    it('should respond with the patched truck', function() {
      expect(patchedTruck.name).to.equal('Patched Truck');
      expect(patchedTruck.info).to.equal('This is the patched truck!!!');
    });
  });

  describe('DELETE /api/trucks/:id', function() {
    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete(`/api/trucks/${newTruck._id}`)
        .expect(204)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when truck does not exist', function(done) {
      request(app)
        .delete(`/api/trucks/${newTruck._id}`)
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
