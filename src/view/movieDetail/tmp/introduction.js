import React, {useState} from 'react';
import './introduction.less';

export default function Introduction({ introductionRef }) {
  const [isShowMore, setIsShowMore] = useState(false);

  // componentDidMount() {
    // this.props.commentDomRef = this.commentDomRef;
    // this.props.createRef(this.introductionRef, 0);
  // }

  // useEffect(() => {

  // })

  function showMoreContent() {
    setIsShowMore(!isShowMore);
  };

  return (
    <div className="introduction-wrapper" ref={introductionRef}>
      <section className="show-desc">
        <div className="show-desc-container">
          <p className={`show-desc-content ${isShowMore ? 'show-more' : ''}`} onClick={() => showMoreContent()}>
            在熙攘的人类世界里，很多妖精隐匿其中，他们与人类相安无事地生活着。猫妖罗小黑因为家园被破坏，开始了它的流浪之旅。
            这场旅途中惺惺相惜的妖精同类与和谐包容的人类伙伴相继出现，让小黑陷入了两难抉择，究竟何处才是真正的归属？
          </p>
        </div>
      </section>
      <section className="show-artists">
        <h2>演职人员</h2>
        <div className="show-artists-container">
          <ul className="show-artists-list">
            <li className="item">
              <div className="img-container" style={{backgroundImage: "url('//gw.alicdn.com/i1/TB18UgIfX67gK0jSZPfXXahhFXa_.jpg_320x320Q30.jpg_.webp')"}}></div>
              <p className="name">MTJJ木头</p>
              <p className="position">导演</p>
            </li>
            <li className="item">
              <div className="img-container" style={{backgroundImage: "url('//gw.alicdn.com/i1/TB18UgIfX67gK0jSZPfXXahhFXa_.jpg_320x320Q30.jpg_.webp')"}}></div>
              <p className="name">MTJJ木头</p>
              <p className="position">导演</p>
            </li>
            <li className="item">
              <div className="img-container" style={{backgroundImage: "url('//gw.alicdn.com/i1/TB18UgIfX67gK0jSZPfXXahhFXa_.jpg_320x320Q30.jpg_.webp')"}}></div>
              <p className="name">MTJJ木头</p>
              <p className="position">导演</p>
            </li>
            <li className="item">
              <div className="img-container" style={{backgroundImage: "url('//gw.alicdn.com/i1/TB18UgIfX67gK0jSZPfXXahhFXa_.jpg_320x320Q30.jpg_.webp')"}}></div>
              <p className="name">MTJJ木头</p>
              <p className="position">导演</p>
            </li>
            <li className="item">
              <div className="img-container" style={{backgroundImage: "url('//gw.alicdn.com/i1/TB18UgIfX67gK0jSZPfXXahhFXa_.jpg_320x320Q30.jpg_.webp')"}}></div>
              <p className="name">MTJJ木头</p>
              <p className="position">导演</p>
            </li>
          </ul>
        </div>
      </section>
      <section className="show-albums">
        <h2>视频</h2>
        <div className="show-albums-container">
          <ul className="show-albums-list">
            <li className="item">
              <div className="img-container" style={{backgroundImage: "url('//gw.alicdn.com/i1/TB1_r1PeKL2gK0jSZFmXXc7iXXa_.jpg_760x760Q30.jpg_.webp')"}}></div>
              <i className="icon iconfont">&#xe8bc;</i>
            </li>
            <li className="item">
              <div className="img-container" style={{backgroundImage: "url('//gw.alicdn.com/i1/TB1_r1PeKL2gK0jSZFmXXc7iXXa_.jpg_760x760Q30.jpg_.webp')"}}></div>
              <i className="icon iconfont">&#xe8bc;</i>
            </li>
            <li className="item">
              <div className="img-container" style={{backgroundImage: "url('//gw.alicdn.com/i1/TB1_r1PeKL2gK0jSZFmXXc7iXXa_.jpg_760x760Q30.jpg_.webp')"}}></div>
              <i className="icon iconfont">&#xe8bc;</i>
            </li>
          </ul>
        </div>
      </section>
      <section className="show-albums">
        <h2>剧照</h2>
        <div className="show-albums-container">
          <ul className="show-albums-list">
            <li className="item">
              <div className="img-container" style={{backgroundImage: "url('//gw.alicdn.com/i1/TB1dbF_gp67gK0jSZPfXXahhFXa_.jpg_600x600Q30.jpg_.webp')"}}></div>
              {/*<i className="icon iconfont">&#xe8bc;</i>*/}
            </li>
            <li className="item">
              <div className="img-container" style={{backgroundImage: "url('//gw.alicdn.com/i1/TB1dbF_gp67gK0jSZPfXXahhFXa_.jpg_600x600Q30.jpg_.webp')"}}></div>
              {/*<i className="icon iconfont">&#xe8bc;</i>*/}
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}
