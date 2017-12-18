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

var store = redux.createStore(reducer, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

//Subscribe to changes
var unsubscribe = store.subscribe(() => {
    var state = store.getState();

    console.log('Name is', state.name);
    document.getElementById('app').innerHTML = state.name;
});

var currentState = store.getState();
console.log('currentState ', currentState);

store.dispatch({
    type: 'CHANGE_NAME',
    name: 'Byron'
});

store.dispatch({
    type: 'CHANGE_NAME',
    name: 'Someone'
});
