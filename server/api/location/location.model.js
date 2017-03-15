'use strict';

import mongoose from 'mongoose';
import {registerEvents} from './location.events';

//This is used to store known locations (such Long Beach Port, San Pedro Port, San Diego Port)

var LocationSchema = new mongoose.Schema({
  name: String,
  loc : { lng : Number , lat : Number },
  fenceRadius: Number,
  updated: Date
});

registerEvents(LocationSchema);
export default mongoose.model('Location', LocationSchema);
