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
      'Container Terminal Operator', // shipper --> role pf users for shiper is "user"
      'Marine Container Carrier', 	// shipper  --> role pf users for shiper is "user"
      'Freight Forwarder', 			// broker   --> role pf users for broker is "user"
      'Customs Broker', 			// broker   --> role pf users for broker is "user"
      'Freight Broker', 			// broker   --> role pf users for broker is "user"
      'Shipper/Consignee', 			// shipper  --> role pf users for shiper is "user"
      'Chassis Provider', 			// shipper  --> role pf users for shiper is "user"
      'Trucking Company', 'Owner Operator' //carrier -->  role pf users for carrier is "carrier"
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
