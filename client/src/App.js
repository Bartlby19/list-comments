import React from "react";
import {Route, Router} from 'react-router-dom';
import "./App.css"

import {createBrowserHistory} from "history";
const history = createBrowserHistory();

class App extends React.Component {
  render() {
    return (
        <Router history={history}>
        <div>Нихонго</div>
        </Router>
    )
  }
}
export default App;
