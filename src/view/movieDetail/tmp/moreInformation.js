import React, {Component} from 'react';
import './moreInformation.less'

export default class MoreInformation extends Component {
  constructor(props) {
    super(props);
    this.moreInfoDomRef = React.createRef();
  }

  componentDidMount() {
    this.props.createRef(this.moreInfoDomRef, 2);
  }

  render() {
    return (
      <div className="more-info-component-wrapper" ref={this.moreInfoDomRef}>
        <h2>电影动态</h2>
        <ul className="article-list">
          <li className="item">
            <div className="article-detail">
              <h3>《罗小黑战记》票房破3亿 高燃酷炫打斗片段曝光</h3>
              <div className="article-info">
                <span>阅读 123</span>
                <span>09-29 08:00</span>
              </div>
            </div>
            <div className="article-poster">
              <img src="//gw.alicdn.com/i3/TB1IAorhpP7gK0jSZFjXXc5aXXa_.jpg_360x360Q30.jpg_.webp" alt=""/>
            </div>
          </li>
          <li className="item">
            <div className="article-detail">
              <h3>《罗小黑战记》票房破3亿 高燃酷炫打斗片段曝光</h3>
              <div className="article-info">
                <span>阅读 123</span>
                <span>09-29 08:00</span>
              </div>
            </div>
            <div className="article-poster">
              <img src="//gw.alicdn.com/i3/TB1IAorhpP7gK0jSZFjXXc5aXXa_.jpg_360x360Q30.jpg_.webp" alt=""/>
            </div>
          </li>
          <li className="item">
            <div className="article-detail">
              <h3>《罗小黑战记》票房破3亿 高燃酷炫打斗片段曝光</h3>
              <div className="article-info">
                <span>阅读 123</span>
                <span>09-29 08:00</span>
              </div>
            </div>
            <div className="article-poster">
              <img src="//gw.alicdn.com/i3/TB1IAorhpP7gK0jSZFjXXc5aXXa_.jpg_360x360Q30.jpg_.webp" alt=""/>
            </div>
          </li>
          <li className="item">
            <div className="article-detail">
              <h3>《罗小黑战记》票房破3亿 高燃酷炫打斗片段曝光</h3>
              <div className="article-info">
                <span>阅读 123</span>
                <span>09-29 08:00</span>
              </div>
            </div>
            <div className="article-poster">
              <img src="//gw.alicdn.com/i3/TB1IAorhpP7gK0jSZFjXXc5aXXa_.jpg_360x360Q30.jpg_.webp" alt=""/>
            </div>
          </li>
          <li className="item">
            <div className="article-detail">
              <h3>《罗小黑战记》票房破3亿 高燃酷炫打斗片段曝光</h3>
              <div className="article-info">
                <span>阅读 123</span>
                <span>09-29 08:00</span>
              </div>
            </div>
            <div className="article-poster">
              <img src="//gw.alicdn.com/i3/TB1IAorhpP7gK0jSZFjXXc5aXXa_.jpg_360x360Q30.jpg_.webp" alt=""/>
            </div>
          </li>
        </ul>
      </div>
    )
  }
}
