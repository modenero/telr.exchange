/* Import modules (getters). */
import getToken from './tokens/getters/getToken'

/* Import modules (actions). */
// import createEthOrder from './tokens/actions/createEthOrder'

/* Import modules (mutations). */
// import setOutbox from './tokens/mutations/setOutbox'

/* Initialize state. */
const state = {
    // 
}

/* Getters. */
const getters = {
    getToken,
}

/* Actions. */
const actions = {
    // createEthOrder,
}

/* Mutations. */
const mutations = {
    // setOutbox,
}

/* Export. */
// NOTE: We DO NOT namespace here to allow for global use of `dispatch`.
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
