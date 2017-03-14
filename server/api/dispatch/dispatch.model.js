'use strict';

import mongoose from 'mongoose';
import {registerEvents} from './dispatch.events';

var DispatchSchema = new mongoose.Schema({
    
    reference: String,
    trips: [
    {
    	label: String,
    	id: {type:mongoose.Schema.Types.ObjectId, ref: 'Trip'}
    }],
    bids: [
    	{
    		providerId: {type:mongoose.Schema.Types.ObjectId, ref: 'Company'},
    		name: String,
    		amount: Number,
    		ratings: String,
    		status: {
    			type: String,
    			enum: ['Pending', 'Accepted', 'Declined'],
    			default: 'Pending'
    		},
    		updated: Date
    	}
    ]
});


registerEvents(DispatchSchema);
export default mongoose.model('Dispatch', DispatchSchema);
