'use strict';

import mongoose from 'mongoose';
import {registerEvents} from './trip.events';

var TripSchema = new mongoose.Schema({

  name: String,

  containerId: {
  	type: mongoose.Schema.Types.ObjectId, 
  	ref:'Job.containers'},

  jobId: { 
  	type: mongoose.Schema.Types.ObjectId, 
  	ref: 'Job'
  },
  
  status: {
  	type: String, 
  	enum: ['NEW', 'ASSIGNED', 'IN TRANSIT', 'DELIVERED'], 
  	default:'NEW'
  },
  readyForDispatch: Boolean,

  from: String,
  to: String,

  constraints: {
  	before: Date, 
  	after: Date, 
  	on: Date, 
  	preconditions: [
  		{tripId: {type: mongoose.Schema.Types.ObjectId, ref: 'Trip'}}
  	]
  },

  note: String,
  proofOfDelivery: String,
  log: [{ 
  	activity: String, 
  	time: Date
  }],

  updated: Date
});

registerEvents(TripSchema);
export default mongoose.model('Trip', TripSchema);
