'use strict'

const React = require('react');
const ReactDOM = require('react-dom');
const { createStore, applyMiddleware } = require('redux');
const thunk = require('redux-thunk').default;
const { Provider } = require('react-redux');

const UsersList = require('./components/UsersList');
const queryReducer = require('./reducers/queryReducer');

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)
const store = createStoreWithMiddleware(queryReducer)

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Front Page</h1>
        <p>This is going to show you some shit, man. Hold on to your butts.</p>
        <UsersList />
      </div>
    );
  }
}

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>, 
  document.getElementById('app')
);
