import React, {Component} from 'react';
import cityList from './cityList1';
import './cityChoose.less';
import LetterKeyList from './tmp/letterKeyList';
import {CSSTransition} from 'react-transition-group';
// import BScroll from '@better-scroll/core';

const hotCityList = [
  {
    "cityCode": "110100",
    "id": "3",
    "parentId": "0",
    "pinYin": "BEIJING",
    "regionName": "北京"
  }, {
    "cityCode": "310100",
    "id": "1",
    "parentId": "0",
    "pinYin": "SHANGHAI",
    "regionName": "上海"
  }, {
    "cityCode": "440300",
    "id": "28",
    "parentId": "0",
    "pinYin": "SHENZHEN",
    "regionName": "深圳"
  }, {
    "cityCode": "440100",
    "id": "8",
    "parentId": "0",
    "pinYin": "GUANGZHOU",
    "regionName": "广州"
  }, {
    "cityCode": "510100",
    "id": "70",
    "parentId": "0",
    "pinYin": "CHENGDU",
    "regionName": "成都"
  }, {
    "cityCode": "420100",
    "id": "10",
    "parentId": "0",
    "pinYin": "WUHAN",
    "regionName": "武汉"
  }, {
    "cityCode": "330100",
    "id": "16",
    "parentId": "0",
    "pinYin": "HANGZHOU",
    "regionName": "杭州",
    "selected": "0"
  }, {
    "cityCode": "500100",
    "id": "40",
    "parentId": "0",
    "pinYin": "CHONGQING",
    "regionName": "重庆"
  }
];

export default class CityChoose extends Component {
  constructor(props) {
    super(props);
    this.cityListNumArray = []
  }

  componentDidMount() {

  }

  jumpTo = (index) => {
    const TITLE_HEIGHT = 30;
    const CITY_ITEM_HEIGHT = 39;
    let scrollHeight = 0;

    if (index > 2) {
      let otherHeight = CITY_ITEM_HEIGHT + 8*CITY_ITEM_HEIGHT + 2*TITLE_HEIGHT;
      let contentHeight = 0;
      for(let i = 0, len = index - 3; i<len; i++) {
        contentHeight += this.cityListNumArray[i];
      }
      scrollHeight = otherHeight + contentHeight * CITY_ITEM_HEIGHT + (index - 3) * TITLE_HEIGHT;
    } else {
      scrollHeight = index === 1 ? 0 : TITLE_HEIGHT + CITY_ITEM_HEIGHT;
    }
    document.getElementsByClassName('city-choose-components-wrapper')[0].scrollTop = scrollHeight;
    // console.log(scrollHeight);
  };

  render () {
    let cityListView = [];
    let letterKeyList = Object.keys(cityList);
    for (let key of letterKeyList) {
      let list = cityList[key];
      this.cityListNumArray.push(list.length);
      let tmp = (
        <div className="city-g" key={key}>
          <h3>{key}</h3>
          <ul>
            {
              list.map((item, index) => (
                <li className="city-item" data-code={item.cityCode} data-name={item.regionName} key={item.id} onClick={() => {this.props.toggleSelectCity(item)}}>{item.regionName}</li>
              ))
            }
          </ul>
        </div>
      );

      cityListView.push(tmp);
    }

    return (
      <div className={this.props.isShowCityList ? `show-list city-choose-components-wrapper` : `city-choose-components-wrapper`}>
        <div className="city-title">
          选择城市
          <div className="btn-close" onClick={this.props.toggleShowCityList}>
            <span className="icon iconfont">&#xe89d;</span>
          </div>
        </div>
        <div className="city-list">
          <div className="city-g current">
            <h3>当前</h3>
            <ul>
              {/*<li className="city-item" data-code={} data-name={}>{}</li>*/}
              <li className="city-item">{this.props.city}</li>
            </ul>
          </div>
          <div className="city-g hot">
            <h3>热门</h3>
            <ul>
              {
                hotCityList.map((item, index) => (
                  <li className="city-item" data-code={item.cityCode} data-name={item.regionName} key={index} onClick={() => {this.props.toggleSelectCity(item)}}>{item.regionName}</li>
                ))
              }
            </ul>
          </div>
          {
            cityListView
          }
        </div>
        <CSSTransition in={this.props.isShowCityList} timeout={200} classNames="letter-key-list">
          <LetterKeyList letterList={letterKeyList} jumpTo={this.jumpTo} />
        </CSSTransition>
      </div>
    )
  }
}
