import React from 'react'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

// import App from './componentsTodo/app';

// import App from './componentsStar/app'

// import { createStore } from 'redux';
// import App from './redux-sanbox/components/app'
// import reducer from './redux-sanbox/reducer';
// const store = createStore(reducer);
import App from './re-store/components/app'
import ErrorBoundry from './re-store/components/error-boundry'
import BookstoreService from './re-store/services/bookstore-service'
import {BookstoreServiceProvider} from './re-store/components/bookstore-service-context'

import store from './re-store/store'


const bookstoreServive = new BookstoreService()


ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <BookstoreServiceProvider value ={bookstoreServive}>
        
          <Router>
          
            <App  />
          </Router>
      
      </BookstoreServiceProvider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById('root'));

