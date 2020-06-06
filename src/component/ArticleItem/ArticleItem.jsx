import React, {Component} from 'react';
import {TagsOutlined} from '@ant-design/icons'
import jsImg from '../../assert/img/js.jpg'
import '../../assert/css/component/ArticleItem.scss';
import {fetchArticleInfo} from "../../actions/articleActions";

class ArticleItem extends Component {
    constructor(props) {
        super(props);
    }

    articleDetail = (id) => {
        this.props.pathPush({pathname: '/home/article/' + id})
    };

    render() {
        const {article} = this.props;
        return (
            <li className="article-item" onClick={() => {this.articleDetail(article._id)}}>
                <div className="article-title">
                    <span className="article-title-tag">【原创】</span>
                    {article.title}
                    <div className="article-title-time">
                        <span className="time-date">{new Date(article.date).getDate()}</span><br/>
                        <span className="time-month">{new Date(article.date).getMonth() + 1}月</span>
                        <span className="time-year">{new Date(article.date).getFullYear()}</span>
                    </div>
                </div>
                <div className="article-img-desc">
                    <img className="article-img" src={article.surface} alt="js"/>
                    <div className="article-desc">{article.description}</div>
                </div>
                <div className="article-bottom-info">
                    <div className="bottom-tag type-tag">
                        <TagsOutlined />
                        <span className="article-tag-txt">{article.tag}</span>
                    </div>
                    <div className="bottom-tag view-tag">
                        <TagsOutlined />
                        <span className="article-tag-txt">{article.view}</span>
                    </div>
                    {/*<div className="bottom-tag comment-tag">
                        <TagsOutlined />
                        <span className="article-tag-txt">888</span>
                    </div>*/}
                </div>
            </li>
        );
    }
}

export default ArticleItem;