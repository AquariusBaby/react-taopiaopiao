import React, {useState, useEffect, useRef} from 'react';
import './cinemaDetail.less';
import BScroll from '@better-scroll/core';
import Slide from '@better-scroll/slide';

function CinemaDetail({id}) {

    const scrollWrapper = useRef(null);
    const [curSwiperPage, setCurSwiperPage] = useState(0);
    const [swiperList, setSwiperList] = useState([1, 2, 3, 4]);

    useEffect(() => {
        BScroll.use(Slide);
        let bs = new BScroll(scrollWrapper.current, {
            scrollX: true,
            scrollY: false,
            slide: {
                threshold: 100,
                loop: false,
                autoplay: false,
            },
            momentum: true,
            bounce: false,
            stopPropagation: true,
            probeType: 2 // listening scroll hook
        });
        bs.on('scrollEnd', () => {
            let page = bs.getCurrentPage();
            // console.log(page);
            setCurSwiperPage(page.pageX);
        });
    }, []);

    return (
        <div className="cinema-detail-wrapper">
            <section className="cinema-info">
                <div className="cinema-name">万达影城（拱墅万达广场店）</div>
                <div className="cinema-address">拱墅区杭行路666号万达广场5楼</div>
            </section>
            <section className="movies-scroll-container">
                <div className="swiper-container" ref={scrollWrapper}>
                    <ul className="swiper-wrapper">
                        {
                            swiperList.map((item, index) => (
                                <li className={`movie-item ${curSwiperPage === index ? 'active' : ''}`} key={index}>
                                {/* <li className="movie-item" style={curSwiperPage === index ? {'margin-right': '16px!important', 'margin-left': '6px!important', 'transform': 'scale(1.15) translateY(-6px)'} : {}} key={index}> */}
                                    <img src="//gw.alicdn.com/i3/TB1AxPnc5pE_u4jSZKbXXbCUVXa_.jpg_110x10000Q75" alt=""/>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="movie-name">
                    <span className="showname">八佰</span>
                    <span className="score-name">淘票票评分</span>
                    <span className="star-remark">9.1</span>
                    <p>147分钟 | 战争 | 王千源、张译、姜武</p>
                </div>
            </section>
            <section className="cinema-schedules">
                <div className="tab-hd-wrap">
                    <ul>
                        <li className="active">今天09-21</li>
                        <li>今天09-21</li>
                        <li>今天09-21</li>
                    </ul>
                </div>
                <div className="schedules-wrapper">
                    <div className="schedule-container">
                        <ul className="schedules-list">
                            <li className="schedules-item">
                                <div className="item-wrap">
                                    <div className="item-container">
                                        <span className="item-clock">11:55</span>
                                        <span className="item-type">国语 3D</span>
                                        <span className="item-price">￥35</span>
                                    </div>
                                    <div className="item-container">
                                        <span className="item-end">13:50散场</span>
                                        <span className="item-point">11号-艺术联盟厅</span>
                                    </div>
                                </div>
                                <div className="btn-wrap">购票</div>
                            </li>
                            <li className="schedules-item">
                                <div className="item-wrap">
                                    <div className="item-container">
                                        <span className="item-clock">11:55</span>
                                        <span className="item-type">国语 3D</span>
                                        <span className="item-price">￥35</span>
                                    </div>
                                    <div className="item-container">
                                        <span className="item-end">13:50散场</span>
                                        <span className="item-point">11号-艺术联盟厅</span>
                                    </div>
                                </div>
                                <div className="btn-wrap">购票</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default CinemaDetail;