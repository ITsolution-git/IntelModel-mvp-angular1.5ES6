'use strict';

import mongoose from 'mongoose';
import {registerEvents} from './company.events';

var CompanySchema = new mongoose.Schema({

  //general company info
  name: String,
  address: String,
  businessType: {
  	type: String, 
  	enum: ['Sole Proprietor', 'Corporation', 'LLC', 'LLP']
  },
  taxId: String,
  type: {
    type: String,
    enum: [
      'Container Terminal Operator', 
      'Marine Container Carrier', 
      'Freight Forwarder', 
      'Customs Broker', 
      'Freight Broker', 
      'BCO', 
      'Chassis Pool', // user
      'Trucking Company', 'Owner Operator', 'Driver' //carrier
     ]
  },
  ratings: String,

  //type specific attributes
  shipperInfo: {
  	//right now shipper does not have additional attributes
  },

  freightForwarderInfo: {
	SCAC: String
  },

  carrierInfo: {
	taxId: String,
	mcNumber: String,
	DOT: String,
	SCAC: String,
	publicLiabilityinsuranceProvider: String,
	cargoInsuranceProvider: String,
	hazmat: Boolean,
	operationAreas: [String],
	trucks: [{plate:String, manufacturer: String, model:String, year: String}]
  },

   updated: Date,
   active: Boolean
});

registerEvents(CompanySchema);
export default mongoose.model('Company', CompanySchema);
