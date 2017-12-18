var redux = require('redux');

console.log('starting redux example');

var reducer = (state = {name: 'Anon'}, action) => {
    // state = state || {name: 'Anon'}; Same as syntax above

    switch (action.type) {
        case 'CHANGE_NAME':
            return {
                ...state,
                name: action.name
            };
        default:
            return state;
    }
};

var store = redux.createStore(reducer);

var currentState = store.getState();
console.log('currentState ', currentState);

store.dispatch({
    type: 'CHANGE_NAME',
    name: 'Byron'
});

console.log('Name should be Byron', store.getState());