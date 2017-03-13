'use strict';

import mongoose from 'mongoose';
import {registerEvents} from './company.events';

var CompanySchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean
});

registerEvents(CompanySchema);
export default mongoose.model('Company', CompanySchema);
