import React, { useState, useEffect } from "react";
import "./filterOption.less";

function FilterOption(props) {
    const { cinemaTypes, cinemaServices, cinemaBrands } = props;
  const [selectedCinemaTypeArr, setSelectedCinemaTypeArr] = useState([]);
  const [selectedCinemaServiceArr, setSelectedCinemaServiceArr] = useState([]);
  const [selectedCinemaBrandArr, setSelectedCinemaBrandArr] = useState([]);

  useEffect(() => {

  }, []);

  function selectCinemaTypeOption (item, event) {
    event.stopPropagation();
    let index = selectedCinemaTypeArr.indexOf(item.code);
    if (index !== -1) {
        let arr = selectedCinemaTypeArr.slice(0);
        arr.splice(index, 1);
        setSelectedCinemaTypeArr([...arr]);
        return ;
    }
    setSelectedCinemaTypeArr([...selectedCinemaTypeArr, item.code]);
  }

  function selectCinemaServiceOption (item, event) {
    event.stopPropagation();
    let index = selectedCinemaServiceArr.indexOf(item.code);
    if (index !== -1) {
        let arr = selectedCinemaServiceArr.slice(0);
        arr.splice(index, 1);
        setSelectedCinemaServiceArr([...arr]);
        return ;
    }
    setSelectedCinemaServiceArr([...selectedCinemaServiceArr, item.code]);
  }

  function selectCinemaBrandOption (item, event) {
    event.stopPropagation();
    let index = selectedCinemaBrandArr.indexOf(item.code);
    if (index !== -1) {
        let arr = selectedCinemaBrandArr.slice(0);
        arr.splice(index, 1);
        setSelectedCinemaBrandArr([...arr]);
        return ;
    }
    setSelectedCinemaBrandArr([...selectedCinemaBrandArr, item.code]);
  }

  function clear() { // 清空
    setSelectedCinemaTypeArr([]);
    setSelectedCinemaServiceArr([]);
    setSelectedCinemaBrandArr([]);
  }
  function finish() { // 完成

  }

  function showAll(type) {

  }

  return (
    <div className="filter-option-wrapper">
      <div className="filter-option-container">
        <div className="filter-section-list">
            <div className="option-section">
                <h3 className="title">
                    <span className="type">放映影厅</span>
                    <span className="handle" onClick={() => showAll(0)}>展开</span>
                </h3>
                <ul className="option-list">
                    {
                        cinemaTypes.map((item, index) => {
                            return <li className={`item ${selectedCinemaTypeArr.includes(item.code) ? 'active' : '' }`} key={item.code} onClick={event => selectCinemaTypeOption(item, event)}>{item.title}</li>;
                        })
                    }
                </ul>
            </div>
            <div className="option-section">
                <h3 className="title">
                    <span className="type">影院服务</span>
                    <span className="handle" onClick={() => showAll(0)}>展开</span>
                </h3>
                <ul className="option-list">
                    {
                        cinemaServices.map((item, index) => {
                            return <li className={`item ${selectedCinemaServiceArr.includes(item.code) ? 'active' : ''}`} key={item.code} onClick={event => selectCinemaServiceOption(item, event)}>{item.title}</li>;
                        })
                    }
                </ul>
            </div>
            <div className="option-section">
            <h3 className="title">
                <span className="type">影院品牌</span>
                <span className="handle" onClick={() => showAll(0)}>展开</span>
            </h3>
            <ul className="option-list">
                {
                    cinemaBrands.slice(1).map((item, index) => {
                        return <li className={`item ${selectedCinemaBrandArr.includes(item.code) ? 'active' : ''}`} key={item.code} onClick={event => selectCinemaBrandOption(item, event)}>{item.title}</li>;
                    })
                }
            </ul>
        </div>
        </div>
        <div className="btn-group">
            <button className="btn btn-clear" onClick={() => clear()}>清空</button>
            <button className="btn btn-finish" onClick={() => finish()}>完成</button>
        </div>
      </div>
    </div>
  );
}

export default FilterOption;
