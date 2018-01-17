import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore';
import createHistory from 'history/createBrowserHistory';
import { Router, Route } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={createHistory()}>
      <ScrollToTop>
        <Route path="/" component={App}/>
      </ScrollToTop>
    </Router>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
