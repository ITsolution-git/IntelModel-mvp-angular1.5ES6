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
      'Container Terminal Operator', // shipper
      'Marine Container Carrier', //shipper
      'Freight Forwarder', //broker
      'Customs Broker', //broker
      'Freight Broker', //broker
      'BCO', // shipper
      'Chassis Pool', // user
      'Trucking Company', 'Owner Operator', 'Driver' //carrier
     ]
  },
  ratings: String,

  //type specific attributes
  shipperInfo: {
  	//right now shipper does not have additional attributes
  },

  brokerInfo: {
	SCAC: String
  },

  carrierInfo: {
	mcNumber: String,
	DOT: String,
	SCAC: String,
	publicLiabilityinsuranceProvider: String,
	cargoInsuranceProvider: String,
	hazmat: Boolean,
	operationAreas: [String]
  },
   updated: Date,
   active: Boolean
});

registerEvents(CompanySchema);
export default mongoose.model('Company', CompanySchema);
