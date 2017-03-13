'use strict';

import mongoose from 'mongoose';
import {registerEvents} from './dispatch.events';

var DispatchSchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean
});

registerEvents(DispatchSchema);
export default mongoose.model('Dispatch', DispatchSchema);
