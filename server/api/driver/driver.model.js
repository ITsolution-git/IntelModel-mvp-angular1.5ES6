'use strict';

import mongoose from 'mongoose';


//This entity might not be necessary, keep it here for now.

var DriverSchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean
});

export default mongoose.model('Driver', DriverSchema);
