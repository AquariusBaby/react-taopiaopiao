import React, {useState, useRef, useEffect} from 'react';
import './hotRelease.less';
import LoadMore from '@components/loadMore';
import {getHotReleaseList} from '@api/homeService';

export default function HotRelease({history}) {
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const loadMoreRef = useRef(null);
  const scrollContainerRef = useRef(null);
  useEffect(() => {
    setLoading(true);
    pullData();
    // return () => {

    // }
  }, [])

  let pullData = async () => {
    setLoading(true);
    let data = await getHotReleaseList({});
    setLoading(false);
    // if (data.code !== 1) {

    // }
    setMovieList([...movieList, ...data.object])
  };

  let listenScroll = () => {
    let loadMoreDom = loadMoreRef.current;
    if (!isLoading && loadMoreDom.getBoundingClientRect().top + loadMoreDom.scrollHeight < scrollContainerRef.current.scrollHeight) {
      pullData();
    }
    // console.log(loadMoreDom.getBoundingClientRect().top, 'aa')
  };

  // let listenScroll = useEffect(() => {
  //   console.log(123)
  //   let loadMoreDom = loadMoreRef.current;
  //   if (!isLoading && loadMoreDom.getBoundingClientRect().top + loadMoreDom.scrollHeight < scrollContainerRef.current.scrollHeight) {
  //     setLoading(true);
  //     pullData();
  //   }
  // }, [])

  let toDetail = (data) => {
    history.push({
      pathname: '/detail'
    });
  };

  // render() {
    return (
      <div className="hot-release-wrapper" onScroll={listenScroll}>
        <ul className="hot-release-list" ref={scrollContainerRef}>
          {
            movieList.length > 0 &&
            movieList.map((item ,index) => (
              <li className="item" key={index} onClick={() => {toDetail(item)}}>
                <div className="info">
                  <div className="poster">
                    <img src={item.posterUrl} className="poster-img" alt=""/>
                    <i className="icon iconfont play-btn">&#xe8bc;</i>
                  </div>
                  <div className="content">
                    <div className="title">
                      <span className="name">{item.name}</span>
                      {
                        item.type && <span className="type">{item.type}</span>
                      }
                      {
                        item.show && <span className="show">{item.show}</span>
                      }
                    </div>
                    <div className="brief score">淘票票评分 <span className="num">{item.score}</span></div>
                    {
                      item.director.length > 0 && <div className="brief">导演：{item.director.join(' ')}</div>
                    }
                    {
                      item.actor.length > 0 && <div className="brief">主演：{item.actor.join(' ')}</div>
                    }
                    <div className="fantastic"></div>
                  </div>
                  <span className="btn-wrap">购票</span>
                </div>
              </li>
            ))
          }
        </ul>
        <LoadMore loadMoreRef={loadMoreRef} />
      </div>
    )
  // }
}
