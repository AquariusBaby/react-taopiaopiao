import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
// import logo from './logo.svg';
import '@style/reset.css';
import '@style/base.less';
import HomePage from './homePage/homePage';
import MovieDetail from './movieDetail/movieDetail';
// import HotRelease from './homePage/tmp/hotRelease';
// import PreRelease from './homePage/tmp/preRelease';
// console.log(<HomePage />, 'sss');
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route path="/detail" component={MovieDetail} />
          <Redirect from="/" to="/home" />
        </Switch>
        {/*<HomePage />*/}
      </div>
    </Router>
  );
}

export default App;
