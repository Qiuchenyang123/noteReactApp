import React, {Component} from 'react';
import ReactMarkdown from 'react-markdown';
import es6 from '../../assert/md/es6.md';
import CodeBlock from "../../utils/CodeBlock";
import HeadingBlock from "../../utils/HeadingBlock";
import '../../assert/css/views/Blog/blog.scss'

class Blog extends Component {
    render() {
        return (
            <div className="blogPageWrap">
                <div className="blogPageCtn">
                    <ReactMarkdown
                        source={es6}
                        escapeHtml={false}
                        renderers={{
                            code: CodeBlock,
                            heading: HeadingBlock
                        }}
                    />
                </div>
            </div>
        );
    }
}

export default Blog;