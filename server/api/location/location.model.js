'use strict';

import mongoose from 'mongoose';
import {registerEvents} from './location.events';

var LocationSchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean
});

registerEvents(LocationSchema);
export default mongoose.model('Location', LocationSchema);
