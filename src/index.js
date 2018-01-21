import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore';
import createHistory from 'history/createBrowserHistory';
import { Router, Route } from 'react-router-dom';
import ScrollToTop from './utils/ScrollToTop';
import './index.css';

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
