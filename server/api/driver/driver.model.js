'use strict';

import mongoose from 'mongoose';

var DriverSchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean
});

export default mongoose.model('Driver', DriverSchema);
