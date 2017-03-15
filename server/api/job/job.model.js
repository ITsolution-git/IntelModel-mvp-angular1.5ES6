'use strict';

import mongoose from 'mongoose';
import {registerEvents} from './job.events';

//use a geolocation service to convert string address to a [lng,lat] to improve further process

var locType = { address: String, loc : { lng : Number , lat : Number }};

var JobSchema = new mongoose.Schema({

  name: String,
  alerts: [{msg: String, time: Date}],
  log: [{activity: String, time: Date}],
  type: {
    type: String,
    enum: ['Import', 'Export', 'Cross Town'],
    required: true
  },
  isLiveLoad: Boolean,

  from: locType,
  to: locType,

  constraints: {
    before: Date,
    after: Date,
    on: Date
  },
  containers: [{
    number: String,
    type: String
  }],

  quote: {
    charge: Number,
    note: String,
    confirmedByShipper: Boolean
  },

  reference: String,
  shipper: String,
  consignee:String,

  import: {
    billOfLading: String,
    portOfDischarge: String,
    dateOfDischarge: Date,
    marineCarrier: String,
    terminal:String,
    vesselName:String,
    voyageNumber:String,
    shipper:String,
    consignee:String,
    deliveryAddress: String,
    lastFreeDate:  Date,
    lastFreeReturnDate:  Date
  },

  export: {
    booking: String,
    portOfLoading: String,
    dateOfDeparture: Date,
    marineCarrier: String,
    terminal: String,
    vesselName: String,
    voyageNumber:String,
    shipper:String,
    consignee:String,
    pickupAddress: String,
    emptyStartDate: Date,
    fullStartDate:  Date,
    cutOffDate:  Date
  },

  crossTown: {
    //nothing additional attributes needed for cross town jobs.
  },

  updated: Date
});


registerEvents(JobSchema);
export default mongoose.model('Job', JobSchema);
