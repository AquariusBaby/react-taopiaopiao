import React, {useState, useEffect, useRef} from 'react';
import './movieDetail.less';
import Star from '@components/star';
import ProcessBar from '@components/process';
import Introduction from './tmp/introduction';
import Comments from './tmp/comments';
import MoreInformation from './tmp/moreInformation';
// import {throttle} from '@util';

export default function MovieDetail() {
  const tabLineClass = ['tab-left', 'tab-center', 'tab-right'];

  const wrapperRef = useRef(null);
  const tagRef = useRef(null);
  const introductionRef = useRef(null);
  const commentDomRef = useRef(null);
  const moreInfoDomRef = useRef(null);

  const [tabIndex, setTabIndex] = useState(0);
  const [isPlayVideo, setIsPlayVideo] = useState(false);
  const [isFixedTag, setIsFixedTag] = useState(false);


  function toggleTab(index) {
    if (index === 0) {
      wrapperRef.current.scrollTop = introductionRef.current.offsetTop - 48;
    }
    if (index === 1) {
      wrapperRef.current.scrollTop = commentDomRef.current.offsetTop - 48;
    }
    if (index === 2) {
      wrapperRef.current.scrollTop = moreInfoDomRef.current.offsetTop - 48;
    }
  };

  function playVideo() {
    setIsPlayVideo(!isPlayVideo);
  };

  function listenScroll() {
    let windowScrollTop = wrapperRef.current.scrollTop;

    let top = (tagRef.current.offsetTop - windowScrollTop) <= 0;
    let commentDomTop;
    let moreInfoDomTop;

    commentDomRef && (commentDomTop = (commentDomRef.current.offsetTop - windowScrollTop) <= 48);
    moreInfoDomRef && (moreInfoDomTop = (moreInfoDomRef.current.offsetTop - windowScrollTop) <= 48);

    setIsFixedTag(top);
    setTabIndex(0);

    commentDomTop && setTabIndex(1);
    moreInfoDomTop && setTabIndex(2);
  };

  return (
    <div className="movie-detail-wrapper" ref={wrapperRef} onScroll={() => listenScroll()}>
      <section className="video-header">
        {
          isPlayVideo ?
            <div className="poster">
              <video className="video-player" preload="preload" autoPlay="autoPlay" controls="controls" src="//cloud.video.taobao.com/play/u/1745440806/p/1/d/sd/e/6/t/1/235235052072.mp4"></video>
            </div> :
            <div className="poster" style={{backgroundImage: "url('//gw.alicdn.com/i1/TB1_r1PeKL2gK0jSZFmXXc7iXXa_.jpg_760x760Q30.jpg_.webp')"}}>
              <span className="play-btn" onClick={() => playVideo()}></span>
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
      <div className="tag-fixed-container" ref={tagRef}>
        <ul className={`tab-container ${isFixedTag && 'fix-tag'}`}>
          <li className={`tab-item ${tabIndex === 0 && 'active'}`} onClick={() => toggleTab(0)}>简介</li>
          <li className={`tab-item ${tabIndex === 1 && 'active'}`} onClick={() => toggleTab(1)}>影评</li>
          <li className={`tab-item ${tabIndex === 2 && 'active'}`} onClick={() => toggleTab(2)}>更多</li>
          <li className={`tab-line ${tabLineClass[tabIndex]}`}></li>
        </ul>
      </div>
      <Introduction introductionRef={introductionRef} />
      <Comments commentDomRef={commentDomRef} />
      <MoreInformation moreInfoDomRef={moreInfoDomRef} />
    </div>
  )
}
