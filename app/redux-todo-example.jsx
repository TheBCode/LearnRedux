var redux = require('redux');

console.log('Starting todo redux example');

var stateDefault = {
    searchText: '',
    showCompleted: false,
    todo: []
};

var reducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'CHANGE_SEARCH_TEXT':
            return {
                ...state,
                searchText: action.searchText
            };
        default:
            return state;
    }
};

var store = redux.createStore(reducer, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

var unsubscribe = store.subscribe(() => {
    var currentState = store.getState();

    console.log('currentState ', currentState.searchText);
    document.getElementById('app').innerHTML = currentState.searchText;
});

store.dispatch({
    type: 'CHANGE_SEARCH_TEXT',
    searchText: 'Test search text'
});

store.dispatch({
    type: 'CHANGE_SEARCH_TEXT',
    searchText: 'Test search text again!'
});


