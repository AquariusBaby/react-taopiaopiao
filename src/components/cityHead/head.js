import React, {useState, useEffect} from "react";
// import { connect } from 'react-redux';
// import jsonp from "jsonp";
import { CSSTransition } from "react-transition-group";
import CityChoose from "@components/cityChoose/cityChoose";
// import { getCinemaInfo } from '@api/cityService.js';
import installScript from "@util/installScript";
import GConfig from "@src/config";
import "./head.less";

function Head(props) {
  // console.log(props);
  // let { children, getCinemaData } = props;
  let { children } = props;
  const [city, setCity] = useState('');
  const [isShowCityList, setShowCityList] = useState(false);
  // const [cinemaInfo, setCinemaInfo] = useState({});
  useEffect(() => {
    async function initCityInfo()  {
      let AMap = window.AMap;
      if (!AMap) {
        let key = GConfig.GAO_DE_MAP_KEY;
        let parentNode = document.body;
        AMap = await installScript(
          `https://webapi.amap.com/maps?v=1.4.15&key=${key}&plugin=AMap.CitySearch`,
          parentNode
        );
      }
      
      AMap.plugin("AMap.CitySearch", function() {
        const citySearch = new AMap.CitySearch();
        citySearch.getLocalCity(function(status, result) {
          if (status === "complete" && result.info === "OK") {
            // 查询成功，result即为当前所在城市信息
            setCity(result.city);
            // getCinemaInfo().then(res => {
              // setCinemaInfo(res);
              // getCinemaData && getCinemaData(res);
            // });
          }
        });
      });
    }
    initCityInfo();
  }, []);

  const toggleShowCityList = () => {
    setShowCityList(!isShowCityList);
  };

  const toggleSelectCity = async data => {
    toggleShowCityList();
    setCity(data.regionName);

    // let res = await getCinemaInfo();
    // setCinemaInfo(res);
    // getCinemaData && getCinemaData(res);
    // jsonp(`https://m.maoyan.com/ajax/filterCinemas?ci=${data.id}&optimus_uuid=6A7FA990A31A11EAA82DD5ACA4C22024F952E283AEF24B7F9870264FC79448CC&optimus_risk_level=71&optimus_code=10`, 
    //   {param: "jsonpCallback",prefix: "callback"}, (err, data) => {
    //   if (err) {
    //     console.log('err: ' + err);
    //     return ;
    //   }
    //   console.log(data);
    // })
  };

  return (
    <>
      <div className="head">
        <div className="city-choose" onClick={toggleShowCityList}>
          <span className="city-name">{city}</span>
          <span className="icon iconfont city-location">&#xe885;</span>
        </div>
        {
          children
        }
      </div>

      <CSSTransition
        in={isShowCityList}
        timeout={300}
        classNames="city-list-choose"
      >
        <CityChoose
          toggleShowCityList={toggleShowCityList}
          toggleSelectCity={toggleSelectCity}
          isShowCityList={isShowCityList}
          city={city}
        />
      </CSSTransition>
    </>
  );
}

// const mapStateToProps = state => ({
//   city: state.city
// });

// const mapDispatchToProps = dispatch => ({
//   setCity(cityInfo) {
//     dispatch(setCity(cityInfo));
//   }
// })

// export default connect(mapStateToProps, mapDispatchToProps)(Head);
export default Head;
