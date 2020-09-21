import React, {Component} from 'react';
import LoadMore from '@components/loadMore';
import './preRelease.less';
import {getPreReleaseList} from '@api/homeService';

export default class PreRelease extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieList: []
    }
  }

  componentDidMount() {
    this.pullData();
  }

  pullData = async () => {
    let data = await getPreReleaseList({});
    if (data.code !== 1) {

    }
    this.setState({
      movieList: [...this.state.movieList, ...data.object]
    })
  };

  render() {
    return (
      <div className={`pre-release-wrapper ${this.props.isShow ? '' : 'hide'}`}>
        <ul className="pre-release-list">
          {
            this.state.movieList.length > 0 &&
            this.state.movieList.map((item ,index) => (
              <li className="item" key={index}>
                <div className="date">{item.date}</div>
                {
                  item.movie.length > 0 &&
                  item.movie.map((movieItem, movieIndex) => (
                    <div className="info" key={movieIndex}>
                      <div className="poster">
                        <img src={movieItem.posterUrl} className="poster-img" alt=""/>
                        <i className="icon iconfont play-btn">&#xe8bc;</i>
                      </div>
                      <div className="content">
                        <div className="title">
                          <span className="name">{movieItem.name}</span>
                          {
                            movieItem.type && <span className="type">{movieItem.type}</span>
                          }
                          {
                            movieItem.show && <span className="show">{movieItem.show}</span>
                          }
                        </div>
                        <div className="brief score">淘票票评分 <span className="num">{movieItem.score}</span></div>
                        {
                          movieItem.director.length > 0 && <div className="brief">导演：{movieItem.director.join(' ')}</div>
                        }
                        {
                          movieItem.actor.length > 0 && <div className="brief">主演：{movieItem.actor.join(' ')}</div>
                        }
                        <div className="fantastic"></div>
                      </div>
                      <button className="btn-wrap">预售</button>
                    </div>
                  ))
                }
              </li>
            ))
          }
        </ul>
        <LoadMore></LoadMore>
      </div>
    )
  }
}
