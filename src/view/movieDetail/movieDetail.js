import React, {Component} from 'react';
import './movieDetail.less';
import Star from '@components/star';
import ProcessBar from '@components/process';
import Introduction from './tmp/introduction';
import Comments from './tmp/comments';
import MoreInformation from './tmp/moreInformation';
import {throttle} from '@util';

export default class MovieDetail extends Component {
  constructor(props) {
    super(props);
    this.tabLineClass = ['tab-left', 'tab-center', 'tab-right'];
    this.wrapperRef = React.createRef();
    this.tagRef = React.createRef();
    this.introductionRef = null;
    this.commentDomRef = null;
    this.moreInfoDomRef = null;
    this.state = {
      tabIndex: 0,
      isPlayVideo: false,
      isFixedTag: false
    }
  }

  toggleTab(index) {
    // if (this.state.tabIndex !== index) {
    //   return ;
    // }
    // event.preventDefault();
    // event.stopPropagation();
    // this.setState({
    //   tabIndex: index
    // }, () => {
    //   console.log(this.state.tabIndex, 'sss');
    if (index === 0) {
      this.wrapperRef.current.scrollTop = this.introductionRef.current.offsetTop - 48;
    }
    if (index === 1) {
      this.wrapperRef.current.scrollTop = this.commentDomRef.current.offsetTop - 48;
    }
    if (index === 2) {
      this.wrapperRef.current.scrollTop = this.moreInfoDomRef.current.offsetTop - 48;
    }
    // });
  };

  playVideo = ()=> {
    this.setState({
      isPlayVideo: !this.state.isPlayVideo
    })
  };

  createRef = (ref, id) => {
    id === 0 && (this.introductionRef = ref);
    id === 1 && (this.commentDomRef = ref);
    id === 2 && (this.moreInfoDomRef = ref);
  };

  listenScroll() {
    // event.preventDefault();
    // event.stopPropagation();
    // window.addEventListener('scroll', () => {
    //   let windowScrollTop = document.documentElement.scrollTop ||
    //     window.pageYOffset ||
    //     document.body.scrollTop
    //   ;
    let windowScrollTop = this.wrapperRef.current.scrollTop;
    // console.log(this.tagRef.current.offsetTop, windowScrollTop);
    let top = (this.tagRef.current.offsetTop - windowScrollTop) <= 0;
    let commentDomTop;
    let moreInfoDomTop;

    this.commentDomRef && (commentDomTop = (this.commentDomRef.current.offsetTop - windowScrollTop) <= 48);
    this.moreInfoDomRef && (moreInfoDomTop = (this.moreInfoDomRef.current.offsetTop - windowScrollTop) <= 48);

    // console.log(this.commentDomRef, this.moreInfoDomRef);
    this.setState({
      isFixedTag: top,
      tabIndex: 0
    });

    commentDomTop && this.setState({tabIndex: 1});
    moreInfoDomTop && this.setState({tabIndex: 2});
    // }, true);
  };

  componentDidMount() {
    // throttle(this.listenScroll, 100, 300);
    // this.listenScroll();
  }

  render() {
    return (
      <div className="movie-detail-wrapper" ref={this.wrapperRef} onScroll={this.listenScroll.bind(this)}>
        <section className="video-header">
          {
            this.state.isPlayVideo ?
              <div className="poster">
                <video className="video-player" preload="preload" autoPlay="autoPlay" controls="controls" src="//cloud.video.taobao.com/play/u/1745440806/p/1/d/sd/e/6/t/1/235235052072.mp4"></video>
              </div> :
              <div className="poster" style={{backgroundImage: "url('//gw.alicdn.com/i1/TB1_r1PeKL2gK0jSZFmXXc7iXXa_.jpg_760x760Q30.jpg_.webp')"}}>
                <span className="play-btn" onClick={this.playVideo}></span>
                {/*<i></i>*/}
                <div className="back-gradient"></div>
              </div>
          }
        </section>
        <section className="show-info">
          <div className="poster-wrap" style={{backgroundImage: "url('//gw.alicdn.com/i3/TB14u1UfAP2gK0jSZPxXXacQpXa_.jpg_250x250Q30.jpg_.webp')"}}>
            <span className="type">4D</span>
          </div>
          <div className="info-container">
            <div className="movie-name">罗小黑战记</div>
            <div className="movie-detail">
              <p className="show-intro">动画 / 动作 / 奇幻 / 中国大陆 / 101分钟</p>
              <p className="show-intro">2019-09-07 中国大陆上映 </p>
              <p className="show-intro">
                <span className="want">41.1万人想看 </span>
                / ⼤V推荐度 88%
              </p>
            </div>
          </div>
        </section>
        <section className="show-remark">
          <div className="score">
            <div className="remark-score">
              <span className="score-num">9.1</span>
              <Star score={3.5} size={36} />
            </div>
            <div className="remark-bd">
              <span className="remark-title">淘票票评分</span>
              <span className="remark-num">40.5万人评</span>
            </div>
          </div>
          <ul className="score-detail">
            <li className="score-detail-item">
              <Star score={5} size={24} />
              <div className="process-bar-container">
                <ProcessBar rate={0.6} />
              </div>
            </li>
            <li className="score-detail-item">
              <Star score={5} size={24} />
              <div className="process-bar-container">
                <ProcessBar rate={0.6} />
              </div>
            </li>
            <li className="score-detail-item">
              <Star score={5} size={24} />
              <div className="process-bar-container">
                <ProcessBar rate={0.6} />
              </div>
            </li>
            <li className="score-detail-item">
              <Star score={5} size={24} />
              <div className="process-bar-container">
                <ProcessBar rate={0.6} />
              </div>
            </li>
            <li className="score-detail-item">
              <Star score={5} size={24} />
              <div className="process-bar-container">
                <ProcessBar rate={0.6} />
              </div>
            </li>
          </ul>
        </section>
        <div className="tag-fixed-container" ref={this.tagRef}>
          <ul className={`tab-container ${this.state.isFixedTag && 'fix-tag'}`}>
            <li className={`tab-item ${this.state.tabIndex === 0 && 'active'}`} onClick={this.toggleTab.bind(this, 0)}>简介</li>
            <li className={`tab-item ${this.state.tabIndex === 1 && 'active'}`} onClick={this.toggleTab.bind(this, 1)}>影评</li>
            <li className={`tab-item ${this.state.tabIndex === 2 && 'active'}`} onClick={this.toggleTab.bind(this, 2)}>更多</li>
            <li className={`tab-line ${this.tabLineClass[this.state.tabIndex]}`}></li>
          </ul>
        </div>
        <Introduction createRef={this.createRef} />
        <Comments createRef={this.createRef} />
        <MoreInformation createRef={this.createRef} />
      </div>
    )
  }
}
