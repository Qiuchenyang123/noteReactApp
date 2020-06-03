import React, {Component} from 'react';
import {TagsOutlined} from '@ant-design/icons'
import jsImg from '../../assert/img/js.jpg'
import '../../assert/css/component/ArticleItem.scss'

class ArticleItem extends Component {
    render() {
        return (
            <li className="article-item">
                <div className="article-title">
                    <span className="article-title-tag">【原创】</span>
                    原型链
                    <div className="article-title-time">
                        <span className="time-date">29</span><br/>
                        <span className="time-month">11月</span>
                        <span className="time-year">2020</span>
                    </div>
                </div>
                <div className="article-img-desc">
                    <img className="article-img" src={jsImg} alt="js"/>
                    <div className="article-desc">描述性文字</div>
                </div>
                <div className="article-bottom-info">
                    <div className="bottom-tag type-tag">
                        <TagsOutlined />
                        <span className="article-tag-txt">JS</span>
                    </div>
                    <div className="bottom-tag view-tag">
                        <TagsOutlined />
                        <span className="article-tag-txt">888</span>
                    </div>
                    <div className="bottom-tag comment-tag">
                        <TagsOutlined />
                        <span className="article-tag-txt">888</span>
                    </div>
                </div>
            </li>
        );
    }
}

export default ArticleItem;