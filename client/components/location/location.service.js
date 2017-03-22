'use strict';

export function LocationResource($resource) {
    'ngInject';

    return $resource('/api/locations/:id/:controller', {
        id: '@_id'
    }, {});
}