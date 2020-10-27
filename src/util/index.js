

import api from '../api'

export const request = (endpoint, options) => {
    const type = (options.type || 'get').toLowerCase();
    if (type == 'get') {
        return api[type](endpoint, { ...options.params })
    } else {
        return api[type](endpoint, options.params)
    }
}