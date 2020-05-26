import React, {useRef, useEffect} from 'react';
import './index.less';

export default function LoadMore({loadMoreRef}) {
  // constructor(props) {
  //   super(props);
  //   this.timerId = null;
  // }
  // const loadMore = useRef(null);
  // useEffect(() => {
    // console.log(loadMore.current.getBoundingClientRect().top, 'aa')
  // })

  // hasScrollbar() {
  //   return document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight);
  // }

  // componentDidMount() {
  //   const {loadMoreFn} = this.props; //长屏手机一页未撑满时，自动加载第二页
  //   if (!this.hasScrollbar()) {
  //     loadMoreFn();
  //   }
  //   const callback = () => {
  //     const wrapper = this.refs.wrapper;
  //     const top = wrapper && wrapper.getBoundingClientRect().top;
  //     const windowHeight = window.screen.height;
  //     console.log(top, windowHeight);
  //     if (top && top < windowHeight) {
  //       wrapper && loadMoreFn();
  //     }
  //   };
  //   //滚动事件
  //   window.addEventListener('scroll', () => {
  //     console.log(111);
  //     if (this.props.isLoadingMore) { return; }
  //     if (this.timerId) {
  //       clearTimeout(this.timerId);
  //       this.timerId = null;
  //     }
  //     this.timerId = setTimeout(callback, 50);
  //   }, false);
  // }

  // componentWillUnmount() {
  //   // window.removeEventListener('scroll', null, false);
  //   this.timerId = null;
  // }

  // render() {
    return (
      <div className='load-more-wrapper' ref={loadMoreRef}>
        {/*{*/}
          {/*this.props.isLoadingMore && <img src="../../image/loading.gif" alt=""/>*/}
        {/*}*/}
        <img src="../../image/loading.gif" alt=""/>
      </div>
    )
  // }
}
