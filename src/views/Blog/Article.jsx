import React, {Component} from 'react';
import CodeBlock from "../../utils/CodeBlock";
import HeadingBlock from "../../utils/HeadingBlock";
import ReactMarkdown from 'react-markdown';
import '../../assert/css/views/Blog/article.scss'
import {
    fetchArticleInfo
} from "../../actions/articleActions";

class Article extends Component {
    constructor(props) {
        super(props);
        console.log(12, this.props);
    }

    componentDidMount() {
        this.props.dispatch(fetchArticleInfo(this.props.match.params.id))
    }

    render() {
        const {content} = this.props.articleInfo;
        return (
            <div className="article-ctn">
                {
                    content && <ReactMarkdown
                        source={content}
                        escapeHtml={false}
                        renderers={{
                            code: CodeBlock,
                            heading: HeadingBlock
                        }}
                    />
                }
            </div>
        );
    }
}

export default Article;