'use strict';

import mongoose from 'mongoose';
import {registerEvents} from './job.events';

var JobSchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean
});

registerEvents(JobSchema);
export default mongoose.model('Job', JobSchema);
