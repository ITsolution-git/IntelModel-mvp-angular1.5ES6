'use strict';

import mongoose from 'mongoose';
import {registerEvents} from './report.events';

var ReportSchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean
});

registerEvents(ReportSchema);
export default mongoose.model('Report', ReportSchema);
