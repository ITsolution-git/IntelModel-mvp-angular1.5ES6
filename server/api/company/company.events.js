/**
 * Company model events
 */

'use strict';

import {EventEmitter} from 'events';
var CompanyEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
CompanyEvents.setMaxListeners(0);

// Model events
var events = {
  save: 'save',
  remove: 'remove'
};

// Register the event emitter to the model events
function registerEvents(Company) {
  for(var e in events) {
    let event = events[e];
    Company.post(e, emitEvent(event));
  }
}

function emitEvent(event) {
  return function(doc) {
    CompanyEvents.emit(event + ':' + doc._id, doc);
    CompanyEvents.emit(event, doc);
  };
}

export {registerEvents};
export default CompanyEvents;
