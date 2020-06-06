import React, {Component} from 'react';
import ArticleItem from "../../component/ArticleItem/ArticleItem";
import '../../assert/css/views/Blog/blog.scss'
import {fetchArticleList} from "../../actions/articleActions";

class Blog extends Component {
    constructor(props) {
        super(props)
    }

    addArticleHandle = () => {
        this.props.history.push({pathname: '/home/addArticle'})
    };

    componentWillMount() {
        this.props.dispatch(fetchArticleList())
    }

    render() {
        const {articleList} = this.props;
        return (
            <div className="blog-page-wrap">
                <div className="btn-group">
                    <button onClick={this.addArticleHandle} className="btn btn-primary">添加文章</button>
                </div>
                <div className="article-list-wrap">
                    <ul className="article-list">
                        {
                            articleList.map((article, index) => <ArticleItem pathPush={this.props.history.push} article={article} key={index}/>)
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

export default Blog;