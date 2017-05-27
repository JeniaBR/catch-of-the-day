import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './css/style.css';
import App from './components/App';
import StorePicker from './components/StorePicker';

const Root = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route exactly pattern="/" component={StorePicker}/>
        <Route pattern="/store/:storeId" component={App}/>
      </Switch>
    </BrowserRouter>
  );
}

render(<Root/>, document.querySelector('#main'));