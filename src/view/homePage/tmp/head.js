import React from "react";
import {Link} from 'react-router-dom';
import "./head.less";

export default function Head(props) {
  let { toggleShowCityList, city, pathname } = props;
  let computedPath = pathname.includes('hot_release') ? 1 : 0;
  return (
    <div className="head">
      <div className="city-choose">
        <span className="city-name">{city}</span>
        <span
          className="icon iconfont city-location"
          onClick={toggleShowCityList}
        >
          &#xe885;
        </span>
      </div>
      <ul className="tab-choose">
        {/* <li
          className={`tab-item ${tabIndex === 0 ? "active" : ""}`}
          onClick={() => changeTab(0)}
        >
          正在热映
        </li>
        <li
          className={`tab-item ${tabIndex === 1 ? "active" : ""}`}
          onClick={() => changeTab(1)}
        >
          即将上映
        </li> */}
        <Link className={`tab-item ${computedPath ? "active" : ""}`} to={'/home/hot_release'}>正在热映</Link>
        <Link className={`tab-item ${computedPath ? "" : "active"}`} to={'/home/pre_release'}>即将上映</Link>
        <li
          className={`tab-ink-bar ${computedPath? "tab-left" : "tab-right"}`}
        />
      </ul>
    </div>
  );
}
