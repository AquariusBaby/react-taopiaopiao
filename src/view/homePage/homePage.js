import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
// import {Route} from 'react-router';
import Head from "./tmp/head";
import PreRelease from "./tmp/preRelease";
import HotRelease from "./tmp/hotRelease";
import CityChoose from "@components/cityChoose/cityChoose";
// import SlideBox from "@components/slideBox";
import installScript from "@util/installScript";
import GConfig from "@src/config";
import './homePage.less';

export default class HomePage extends Component {
  constructor(props) {
    // console.log('home init');
    super(props);
    this.state = {
      city: null,
      // tabIndex: 0,
      isShowCityList: false
    };
    // 配置slideBox容器参数
    this.option = {
      calcExcludeHeight: 50,
      isInit: true
    };
  }

  componentDidMount() {
    if (!window.AMap) {
      let key = GConfig.GAO_DE_MAP_KEY;
      let parentNode = document.body;
      let _this = this;
      installScript(
        `https://webapi.amap.com/maps?v=1.4.15&key=${key}&plugin=AMap.CitySearch`,
        parentNode
      ).then(AMap => {
        AMap.plugin("AMap.CitySearch", function() {
          var citySearch = new AMap.CitySearch();
          citySearch.getLocalCity(function(status, result) {
            if (status === "complete" && result.info === "OK") {
              // 查询成功，result即为当前所在城市信息
              _this.setState({
                city: result.city
              });
            }
          });
        });
      });
    }
  }

  toggleShowCityList = () => {
    this.setState({
      isShowCityList: !this.state.isShowCityList
    });
  };

  toggleSelectCity = data => {
    this.toggleShowCityList();
    // console.log(data);
    this.setState({
      city: data.regionName
    });
  };

  // changeTabMove = ({ moveX, moveXRatio }) => {};

  render() {
    // console.log(this.props);
    let {location} = this.props
    return (
      <>
        <div className="home-page-wrapper">
          <Head
            city={this.state.city}
            toggleShowCityList={this.toggleShowCityList}
            // tabIndex={this.state.tabIndex}
            // changeTab={this.changeTab}
            pathname={location.pathname}
          />
          <Switch>
            <Route path="/home/hot_release" component={HotRelease} />
            <Route path="/home/pre_release" component={PreRelease} />
            <Redirect from="/home" to="/home/hot_release" />
          </Switch>
          {/* <SlideBox
            changeTab={this.changeTab}
            index={this.state.tabIndex}
            option={this.option}
            changeTabMove={this.changeTabMove}
          > */}
            {/* <HotRelease history={this.props.history} /> */}
            {/* <PreRelease history={this.props.history} /> */}
          {/* </SlideBox> */}
          {this.props.children}
          <CSSTransition
            in={this.state.isShowCityList}
            timeout={300}
            classNames="city-list-choose"
          >
            <CityChoose
              toggleShowCityList={this.toggleShowCityList}
              toggleSelectCity={this.toggleSelectCity}
              isShowCityList={this.state.isShowCityList}
              city={this.state.city}
            />
          </CSSTransition>
        </div>
      </>
    );
  }
}
