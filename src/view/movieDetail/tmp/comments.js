import React, {Component} from 'react';
import './comments.less';
import Star from '@components/star';

export default class Comments extends Component {
  constructor(props) {
    super(props);
    this.commentDomRef = React.createRef();
    this.state = {
      hotCommentList: ['感动天地师徒情', '2D动画新高度', '萌系指数爆表']
    }
  }

  componentDidMount() {
    // this.props.commentDomRef = this.commentDomRef;
    this.props.createRef(this.commentDomRef, 1);
  }

  render() {
    return (
      <div className="comments-component-wrapper" ref={this.commentDomRef}>
        {/*影评*/}
        <div className="hot-comment">
          <h2>观众热评</h2>
          <ul className="tag-list">
            <li className="item">全部</li>
            <li className="item">最新</li>
            {
              this.state.hotCommentList.map((item ,index) => (
                <li className="item" key={index}>{item}</li>
              ))
            }
          </ul>
        </div>
        <ul className="comments-list">
          <li className="item">
            <div className="user-info">
              <div className="avatar">
                <img src="//gw.alicdn.com/i1/126430154344474939/TB2MVXmiVXXXXasXpXXXXXXXXXX_!!0-mytaobao.jpg_80x80Q30.jpg_.webp" alt=""/>
              </div>
              <div className="user-wrap">
                <p className="name">牧扉</p>
                <div className="movie-info">
                  <span className="buy">购票</span>
                  <Star score={3.5} size={24} />
                  <span className="score">9.0</span>
                </div>
              </div>
            </div>
            <div className="comment-content">
              很棒！！延续TV版的质感，画面干净精致，音乐应景贴合，观后有种被净化的感觉，说是国内顶尖的二维动画一点不为过，略有吉卜力的影子。北斗企鹅团队配音，话说山新配这么多角色，不会精分么2333。
              前半段稍显无聊，后面循序渐进，打斗分镜利落干脆，喜剧效果不错，原创，冷笑话居多。围绕人与妖精共存为矛盾点，有自己独特的宇宙观，妖精各有特点，风格出彩，中国风结合现代推陈出新，妙趣横生带心思。我很希望它能做一只爆冷的黑猫接替哪吒，但是可能有一定难度。他没有哪吒的老少咸宜，受众面更倾向于年轻观众，像是动画中的文艺类型。
              但不能否认这是一支用心的团队，专业，趣味，有自己的小心思，懂的人自然懂，这不黄渤徐峥都帮忙推广。早就受够TV版了，像结束不了的姨妈一样断断续续，不痛快。小黑大电影从头看到尾，连字幕都不落下，所以大家快去支持啊喂，且看且珍惜！希望小黑票房能节节高升，按木头的尿性，第二部都不知何年何月！哭！
              PS：意外的大彩蛋，这里也有个哪吒，不过是个高冷吐槽boy。
            </div>
            <div className="other">
              <span className="date">09-09 00:13</span>
              <i className="icon iconfont agree-icon">&#xe87d;</i>
              <span className="agree-num">1212</span>
              <i className="icon iconfont reply-icon">&#xe892;</i>
              <span className="reply">300</span>
            </div>
          </li>
          <li className="item">
            <div className="user-info">
              <div className="avatar">
                <img src="//gw.alicdn.com/i1/126430154344474939/TB2MVXmiVXXXXasXpXXXXXXXXXX_!!0-mytaobao.jpg_80x80Q30.jpg_.webp" alt=""/>
              </div>
              <div className="user-wrap">
                <p className="name">牧扉</p>
                <div className="movie-info">
                  <span className="buy">购票</span>
                  <Star score={3.5} size={24} />
                  <span className="score">9.0</span>
                </div>
              </div>
            </div>
            <div className="comment-content">
              很棒！！延续TV版的质感，画面干净精致，音乐应景贴合，观后有种被净化的感觉，说是国内顶尖的二维动画一点不为过，略有吉卜力的影子。北斗企鹅团队配音，话说山新配这么多角色，不会精分么2333。
              前半段稍显无聊，后面循序渐进，打斗分镜利落干脆，喜剧效果不错，原创，冷笑话居多。围绕人与妖精共存为矛盾点，有自己独特的宇宙观，妖精各有特点，风格出彩，中国风结合现代推陈出新，妙趣横生带心思。我很希望它能做一只爆冷的黑猫接替哪吒，但是可能有一定难度。他没有哪吒的老少咸宜，受众面更倾向于年轻观众，像是动画中的文艺类型。
              但不能否认这是一支用心的团队，专业，趣味，有自己的小心思，懂的人自然懂，这不黄渤徐峥都帮忙推广。早就受够TV版了，像结束不了的姨妈一样断断续续，不痛快。小黑大电影从头看到尾，连字幕都不落下，所以大家快去支持啊喂，且看且珍惜！希望小黑票房能节节高升，按木头的尿性，第二部都不知何年何月！哭！
              PS：意外的大彩蛋，这里也有个哪吒，不过是个高冷吐槽boy。
            </div>
            <div className="other">
              <span className="date">09-09 00:13</span>
              <i className="icon iconfont agree-icon">&#xe87d;</i>
              <span className="agree-num">1212</span>
              <i className="icon iconfont reply-icon">&#xe892;</i>
              <span className="reply">300</span>
            </div>
          </li>
        </ul>
      </div>
    )
  }
}
