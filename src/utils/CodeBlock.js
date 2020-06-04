import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
// 设置高亮样式
import {coy} from 'react-syntax-highlighter/dist/esm/styles/prism';
// 设置高亮的语言
import {jsx, javascript, sass, scss} from 'react-syntax-highlighter/dist/esm/languages/prism'

class CodeBlock extends PureComponent {

    componentWillMount() {
        // 注册要高亮的语法
        // 如果不设置打包后提供第三方使用不起作用的
        SyntaxHighlighter.registerLanguage('jsx', jsx);
        SyntaxHighlighter.registerLanguage('javascript', javascript);
    }

    render() {
        const {value, language} = this.props;
        return (
            <figure className="highlight">
                <SyntaxHighlighter language={language} style={coy}>
                    {value}
                </SyntaxHighlighter>
            </figure>
        );
    }
}

CodeBlock.propTypes = {
    value: PropTypes.string.isRequired,
    language: PropTypes.string
};
CodeBlock.defaultProps = {
    language: null
};

export default CodeBlock;