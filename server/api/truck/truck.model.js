'use strict';

import mongoose from 'mongoose';

var TruckSchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean
});

export default mongoose.model('Truck', TruckSchema);
