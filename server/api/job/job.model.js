'use strict';

import mongoose from 'mongoose';
import {registerEvents} from './job.events';

var JobSchema = new mongoose.Schema({

	name: String,
	alerts: [{msg: String, time: Date}],
	log: [{activity: String, time: Date}],
	jobType: {type: String, enum: ['Import', 'Export', 'Cross Town'], required: true},
	isLiveLoad: Boolean,
	from: String,
	to: String,
	constraints: {
  		before: Date, 
  		after: Date, 
  		on: Date
  	},
	containers: [
	{
		number: String,
		type: String
	}],

	quote: {
		charge: Number,
		note: String,
		confirmedByShipper: Boolean
	},

	import: {
          reference: String,
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
		 reference: String,
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
          reference: String,
          shipper: String,
          consignee:String
	},

	updated: Date
});


registerEvents(JobSchema);
export default mongoose.model('Job', JobSchema);
