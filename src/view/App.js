import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link,
} from "react-router-dom";
import { Provider } from "react-redux";
import store from '../redux/index';
// import logo from './logo.svg';
import "@style/reset.css";
import "@style/base.less";
import "./app.less";
import HomePage from "./homePage/homePage";
import CinemaPage from "./cinemaPage/cinemaPage";
import MovieDetail from "./movieDetail/movieDetail";
import CinemaDetail from "./cinemaDetail/cinemaDetail";
// import HotRelease from './homePage/tmp/hotRelease';
// import PreRelease from './homePage/tmp/preRelease';
// console.log(<HomePage />, 'sss');
function App() {
  const [curNav, setCurNav] = useState(0);

  return (
    <Provider store={store}>
      <Router>
        <div id="app">
          <Switch>
            <Route path="/home" component={HomePage}></Route>
            <Route path="/cinema" exact component={CinemaPage}></Route>
            <Route path="/detail" component={MovieDetail}></Route>
            <Route path="/cinema/detail" component={CinemaDetail}></Route>
            <Redirect from="/" to="/home" />
          </Switch>
          
          <ul className="bottom-nav">
            <Link
              to="/home"
              className={`item${curNav === 0 ? " cur" : ""}`}
              onClick={() => setCurNav(0)}
            >
              <i className="icon iconfont icon-dianying">&#xe881;</i>
              <span className="name">热映</span>
            </Link>
            <Link
              to="/cinema"
              className={`item${curNav === 1 ? " cur" : ""}`}
              onClick={() => setCurNav(1)}
            >
              <i className="icon iconfont icon-shouye">&#xe89b;</i>
              <span className="name">影院</span>
            </Link>
            <Link
              to="/home"
              className={`item${curNav === 3 ? " cur" : ''}`}
              onClick={() => setCurNav(2)}
            >
              <i className="icon iconfont icon-taolunqu">&#xe8a2;</i>
              <span className="name">发现</span>
            </Link>
          </ul>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
