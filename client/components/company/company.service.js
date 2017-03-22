'use strict';

export function CompanyResource($resource) {
    'ngInject';

    return $resource('/api/companies/:id/:controller', {
        id: '@_id'
    }, {
        activate: {
            method: 'PUT',
            params: {
                controller: 'activate'
            }
        },
        update: {
            method: 'PUT',
        }
    });
}