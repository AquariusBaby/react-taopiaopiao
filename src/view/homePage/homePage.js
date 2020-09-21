import React, {useState} from 'react';
import Head from "@components/cityHead/head";
import PreRelease from "./tmp/preRelease";
import HotRelease from "./tmp/hotRelease";
// import SlideBox from "@components/slideBox";
import './homePage.less';

export default function HomePage({history}) {
  const [currentTab, setCurrentTab] = useState(0);
  // const option = {
  //   calcExcludeHeight: 50,
  //   isInit: true
  // };
  
  function changeTab (index) {
    currentTab !== index && setCurrentTab(index);
  }

  return (
      <div className="home-page-wrapper">
        <Head>
          <ul className="tab-choose">
            <li className={`tab-item ${currentTab === 0 ? "active" : ""}`} onClick={() => changeTab(0)}>即将上映</li>
            <li className={`tab-item ${currentTab === 1 ? "active" : ""}`} onClick={() => changeTab(1)}>正在热映</li>
            <li className={`tab-ink-bar ${currentTab === 0 ? "tab-left" : "tab-right"}`}></li>
          </ul>
        </Head>
        <HotRelease isShow={currentTab === 0} history={history}></HotRelease>
        <PreRelease isShow={currentTab === 1} history={history}></PreRelease>

        {/* <SlideBox
          changeTab={this.changeTab}
          index={this.state.tabIndex}
          option={this.option}
          changeTabMove={this.changeTabMove}
        > */}
          {/* <HotRelease history={this.props.history} /> */}
          {/* <PreRelease history={this.props.history} /> */}
        {/* </SlideBox> */}
      </div>
  );
}
