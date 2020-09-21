import React from 'react';
import './index.less';
import loading from '../../image/loading.gif';

export default function LoadMore({loadMoreRef}) {
  return (
    <div className='load-more-wrapper' ref={loadMoreRef}>
      <img src={loading} alt=""></img>
    </div>
  )
}
