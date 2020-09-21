import React, { useState, useEffect, useReducer, useRef } from "react";
import LoadMore from '@components/loadMore';
import "./cinemaPage.less";
import Head from "../../components/cityHead/head";
// import RegionList from "./tmp/regionList.js";
// import FilterOption from "./tmp/filterOption.js";
import CompositeOption from "./tmp/composite";
import { getCinemaBySite } from "@api/cityService.js";

function reducer(state, action) {
  switch (action.type) {
    case 'loadMore':
      return [...state, ...action.list];
    case 'reset': 
      return [...action.list];
    default:
      throw new Error(`'${action.type}' type is not defined, check you code`);
  }
}

export default function CinemaPage(props) {
  const [curOption, setCurOption] = useState(null);
  const [filterOption, setFilterOption] = useState({});
  // const [regionList, setRegionList] = useState([]);
  // const [cinemaTypes, setCinemaTypes] = useState([]);
  // const [cinemaServices, setCinemaServices] = useState([]);
  // const [cinemaBrands, setCinemaBrands] = useState([]);
  // const [cinemaList, setCinemaList] = useState([]);
  // const [areaMallFilters, setAreaMallFilters] = useState([]);
  const [scrollHeight, setScrollHeight] = useState(0);

  const container = useRef(null);
  const scrollContainerRef = useRef(null);
  const loadMoreRef = useRef(null);

  const [cinemaList, dispatch] = useReducer(reducer, []);
  // function getCinemaData(data) {
  //   let cinemaService = data.supportFilters.filter((item, index, arr) => {
  //     // 如何一次循环分离出两类数据
  //     return item.groupId === "3";
  //   });
  //   let cinemaTypes = data.supportFilters.filter((item, index, arr) => {
  //     // 如何一次循环分离出两类数据
  //     return item.groupId === "2";
  //   });
  //   setRegionList(data.regionNameFilters);
  //   setCinemaTypes(cinemaTypes);
  //   setCinemaServices(cinemaService);
  //   setCinemaBrands(data.brandFilters);
  //   setCinemaList(data.cinemas);
  //   setAreaMallFilters(data.areaMallFilters);
  // }
  useEffect(() => {
    console.log(1);
    async function getCinemaListBySite() {
      try {
        let data = await getCinemaBySite({

        });
        // if () {

        // }
        // setCinemaList([...cinemaList, ...data.data]); 
        dispatch({type: 'loadMore', list: data.data});
      } catch (error) {
        
      }
    }
    getCinemaListBySite();
  }, [dispatch, scrollHeight]);

  useEffect(() => {
    console.log(2);
    async function getCinemaListBySite() {
      try {
        let data = await getCinemaBySite({

        });
        // if () {

        // }
        // setCinemaList([...cinemaList, ...data.data]); 
        dispatch({type: 'reset', list: data.data});
      } catch (error) {
        
      }
    }
    getCinemaListBySite();
  }, [dispatch, filterOption]);

  // 选择筛选类型
  function chooseFilterOption(type) {
    type === curOption ? setCurOption(null) : setCurOption(type);
  }

  // 设置筛选项
  function setFilterOptionCb(options) {
    setFilterOption({
      ...filterOption,
      ...options
    })
  }

  function listenScroll() {
    let containerDom = container.current;
    let scrollContainerDom = scrollContainerRef.current;
    let loadMoreDom = loadMoreRef.current;
    // console.log(scrollContainerDom.scrollHeight ,loadMoreDom.getBoundingClientRect().top, containerDom.clientHeight);

    if (loadMoreDom.getBoundingClientRect().top <= containerDom.clientHeight) {
      setScrollHeight(scrollContainerDom.scrollHeight);
    }
  }

  // function getCinemaListBySite(code) {
  //   getCinemaBySite(code).then((data) => {
  //     setCinemaList(data.data);
  //   });
  // }

  return (
    <div className="cinema-page-wrapper">
      {/* <Head getCinemaData={getCinemaData}> */}
      <div className="cinema-container" ref={container} onScroll={() => listenScroll()}>
        <Head>
          <ul className="filter-option-list">
            {/* <li
              className={`item ${curOption === 0 && "cur"}`}
              onClick={() => chooseFilterOption(0)}
            >
              全城
            </li> */}
            {/* <li
              className={`item ${curOption === 1 && "cur"}`}
              onClick={() => chooseFilterOption(1)}
            >
              筛选
            </li> */}
            <li
              className={`item ${curOption === 2 && "cur"}`}
              onClick={() => chooseFilterOption(2)}
            >
              综合排序
            </li>
            <i className="icon iconfont icon-sousuo search-icon">&#xe8a1;</i>
          </ul>
        </Head>
        <div className={`option-filter-modal-wrapper ${curOption === null ? 'fn-hide' : ''}`} onClick={() => chooseFilterOption(null)}>
          {/* {curOption === 0 && (
            <RegionList
              regionList={regionList}
              areaMallFilters={areaMallFilters}
              hideFilterModal={setCurOption}
              getCinemaListBySite={getCinemaListBySite}
            ></RegionList>
          )} */}
          {/* {curOption === 1 && (
            <FilterOption
              cinemaTypes={cinemaTypes}
              cinemaServices={cinemaServices}
              cinemaBrands={cinemaBrands}
            ></FilterOption>
          )} */}
          {/* {curOption === 2 && <CompositeOption></CompositeOption>} */}
          <CompositeOption isShow={curOption === 2} setFilterOptionCb={setFilterOptionCb}></CompositeOption>
        </div>
        <ul className="cinema-list" ref={scrollContainerRef}>
          {cinemaList.map((item, index) => {
            return (
              <li className="cinema-item" key={index}>
                <h3 className="title">{item.cinemaName}</h3>
                <p className="address">{item.address}</p>
                <ul className="cinema-support">
                  <span className="support-item">特惠票</span>
                  <span className="support-item">观影小食</span>
                  <span className="support-item">可停车</span>
                </ul>
              </li>
            );
          })}
        </ul>
        <LoadMore loadMoreRef={loadMoreRef}></LoadMore>
      </div>
    </div>
  );
}
