import React from 'react';
import './letterKeyList.less';

export default function LetterKeyList(props) {
  let {letterList, jumpTo} = props;
  return (
    <div className="city-indexed">
      <ul>
        <li className="index-item current" data-index="#当前" data-no="1" onClick={() => {jumpTo(1)}}>当前</li>
        <li className="index-item hot" data-index="#热门" data-no="2" onClick={() => {jumpTo(2)}}>热门</li>
        {
          letterList.map((item, index) => (
            <li className="index-item" data-index={`#${item}`} data-no={index + 3} onClick={() => {jumpTo(index + 3)}} key={index}>{item}</li>
          ))
        }
      </ul>
    </div>
  )
}
