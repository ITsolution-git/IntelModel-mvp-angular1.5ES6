/**
 * Truck model events
 */

'use strict';

import {EventEmitter} from 'events';
import Truck from './truck.model';
var TruckEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
TruckEvents.setMaxListeners(0);

// Model events
var events = {
  save: 'save',
  remove: 'remove'
};

// Register the event emitter to the model events
for(var e in events) {
  let event = events[e];
  Truck.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    TruckEvents.emit(event + ':' + doc._id, doc);
    TruckEvents.emit(event, doc);
  };
}

export default TruckEvents;
