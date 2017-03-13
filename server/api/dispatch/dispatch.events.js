/**
 * Dispatch model events
 */

'use strict';

import {EventEmitter} from 'events';
var DispatchEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
DispatchEvents.setMaxListeners(0);

// Model events
var events = {
  save: 'save',
  remove: 'remove'
};

// Register the event emitter to the model events
function registerEvents(Dispatch) {
  for(var e in events) {
    let event = events[e];
    Dispatch.post(e, emitEvent(event));
  }
}

function emitEvent(event) {
  return function(doc) {
    DispatchEvents.emit(event + ':' + doc._id, doc);
    DispatchEvents.emit(event, doc);
  };
}

export {registerEvents};
export default DispatchEvents;
