'use strict';

import mongoose from 'mongoose';

var TruckSchema = new mongoose.Schema({
  plate: {
    type: String,
    required: true
  },
  manufacturer: String,
  model: String,
  year: String,
  companyId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Company'
  },
  active: Boolean
});

export default mongoose.model('Truck', TruckSchema);
