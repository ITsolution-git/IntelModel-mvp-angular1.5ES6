'use strict';

import mongoose from 'mongoose';
import {registerEvents} from './schedule.events';

var ScheduleSchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean
});

registerEvents(ScheduleSchema);
export default mongoose.model('Schedule', ScheduleSchema);
