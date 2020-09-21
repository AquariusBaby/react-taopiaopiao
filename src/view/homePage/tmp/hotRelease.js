import React, {useState, useRef, useEffect, useReducer} from 'react';
import './hotRelease.less';
import LoadMore from '@components/loadMore';
import {getHotReleaseList} from '@api/homeService';

function reducer(state, action) {
  switch(action.type) {
    case 'loadMore':
      return [...state, ...action.list];
    case 'reset': 
      return [];
    default:
      throw new Error(`'${action.type}' type is not defined, check you code`);
  }
}

export default function HotRelease({history, isShow}) {
  // const [isLoading, setLoading] = useState(false);
  const [scrollHeight, setScrollHeight] = useState(0);

  const container = useRef(null);
  const scrollContainerRef = useRef(null);
  const loadMoreRef = useRef(null);

  const [movieList, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    // setLoading(true);
    // pullData();
    console.log(123);
    async function pullData() {
      // setLoading(true);
      try {
        let data = await getHotReleaseList({});
        if (data.code !== 1) {
  
        }
        dispatch({type: 'loadMore', list: data.object})
      } catch(error) {
  
      }
      // setLoading(false);
    };
    pullData();
  }, [dispatch, scrollHeight])

  function listenScroll() {
    let containerDom = container.current;
    let scrollContainerDom = scrollContainerRef.current;
    let loadMoreDom = loadMoreRef.current;
    // console.log(scrollContainerDom.scrollHeight ,loadMoreDom.getBoundingClientRect().top, containerDom.clientHeight);

    if (loadMoreDom.getBoundingClientRect().top <= containerDom.clientHeight) {
      setScrollHeight(scrollContainerDom.scrollHeight);
    }
  }

  function toDetail(data) {
    history.push({
      pathname: '/detail'
    });
  };

  return (
    <div className={`hot-release-wrapper ${isShow ? '' : 'hide'}`} ref={container} onScroll={listenScroll}>
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
}
