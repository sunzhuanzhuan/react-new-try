

import api from '../api'

export const request = (endpoint, method, options) => {
    const type = (method || 'get').toLowerCase();
    if (type == 'get') {
        return api[type](endpoint, { params: options })
    } else {
        return api[type](endpoint, options)
    }
}