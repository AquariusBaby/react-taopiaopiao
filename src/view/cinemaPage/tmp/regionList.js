import React, { useState, useEffect } from "react";
import "./regionList.less";
// import cinemaAreaList from './cinemaList.json';

export default function RegionList(props) {
  const {
    regionList,
    areaMallFilters,
    hideFilterModal,
    getCinemaListBySite,
  } = props;
  // const { cinemaFilter } = cinemaAreaList;
  // const [regionList, setRegionList] = useState([]);
  // const [siteList, setSiteList] = useState([]);
  const [curRegion, setCurRegion] = useState(0);

  // useEffect(() => {

  // }, [cityID]);

  // useEffect(() => {

  // }, [cityID]);

  function chooseRegion(index, event) {
    // 选择区
    event.stopPropagation();
    setCurRegion(index);
  }

  function chooseSite(code, event) {
    // event.stopPropagation();
    getCinemaListBySite(code);
  }

  return (
    <div
      className="region-select-wrapper"
      onClick={() => hideFilterModal(null)}
    >
      <ul className="region-list">
        <li
          key="ALL"
          className={`item ${curRegion === 0 ? "cur" : ""}`}
          onClick={(event) => chooseRegion(0, event)}
        >
          全部
        </li>
        {regionList.map((item, index) => {
          return (
            <li
              key={item.code}
              className={`item ${curRegion === index + 1 ? "cur" : ""}`}
              onClick={(event) => chooseRegion(index + 1, event)}
            >
              {item.title}
            </li>
          );
        })}
      </ul>
      <ul className="cinema-list">
        {areaMallFilters[curRegion].subFilters.map((item, index) => {
          return (
            <li
              key={item.code}
              className="item"
              onClick={(event) => chooseSite(item.code, event)}
            >
              {item.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
