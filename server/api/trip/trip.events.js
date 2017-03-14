/**
 * Trip model events
 */

'use strict';

import {EventEmitter} from 'events';
var TripEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
TripEvents.setMaxListeners(0);

// Model events
var events = {
  save: 'save',
  remove: 'remove'
};

// Register the event emitter to the model events
function registerEvents(Trip) {
  for(var e in events) {
    let event = events[e];
    Trip.post(e, emitEvent(event));
  }
}

function emitEvent(event) {
  return function(doc) {
    TripEvents.emit(event + ':' + doc._id, doc);
    TripEvents.emit(event, doc);
  };
}

export {registerEvents};
export default TripEvents;
