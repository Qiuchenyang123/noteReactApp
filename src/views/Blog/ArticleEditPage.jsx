import React, {Component} from 'react';
import '../../assert/css/views/Blog/articleEditPage.scss'
import '../../assert/css/views/Blog/markdown.scss'
import CodeBlock from "../../utils/CodeBlock";
import HeadingBlock from "../../utils/HeadingBlock";
import ImgUpload from "../../component/ImgUpload/ImgUpload";
import ReactMarkdown from 'react-markdown';
import {addArticleInfo} from "../../actions/articleActions";
import {message} from 'antd'

class ArticleEditPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: '',
            title: '',
            tag: '',
            origin: '',
            description: '',
            surface: '',
        }
    }

    contentChangeHandle = (e) => {
        this.setState({
            content: e.target.value
        })
    };
    titleChangeHandle = (e) => {
        this.setState({
            title: e.target.value
        })
    };
    tagChangeHandle = (e) => {
        this.setState({
            tag: e.target.value
        })
    };
    originChangeHandle = (e) => {
        this.setState({
            origin: e.target.value
        })
    };
    descriptionChangeHandle = (e) => {
        this.setState({
            description: e.target.value
        })
    };
    addArticleHandle = () => {
        const params = Object.assign({}, this.state, {author: this.props.userInfo._id});
        addArticleInfo(params)
            .then(res => {
                if (res.data.code === 1) {
                    message.success('添加成功');
                    this.setState({
                        content: '',
                        title: '',
                        tag: '',
                        origin: '',
                        description: '',
                        surface: '',
                    })
                }
            })
            .catch(err => {
                console.log(err);
            })
    };

    updateSurface = (surfaceUrl) => {
        this.setState({
            surface: surfaceUrl
        })
    };

    render() {
        const {
            title,
            tag,
            origin,
            surface,
            description,
            content
        } = this.state;
        return (
            <div className="article-edit-page">
                <div className="left-edit-ctn">
                    <div className="article-item-ctn">
                        <span className="article-item-txt">标题：</span>
                        <input onChange={(event) => {
                            this.titleChangeHandle(event)
                        }} type="text" className="article-item-input" defaultValue={title}/>
                    </div>
                    <div className="article-item-ctn">
                        <span className="article-item-txt">来源：</span>
                        <input onChange={(event) => {
                            this.originChangeHandle(event)
                        }} type="text" className="article-item-input" defaultValue={origin}/>
                    </div>
                    <div className="article-item-ctn">
                        <span className="article-item-txt">标签：</span>
                        <input onChange={(event) => {
                            this.tagChangeHandle(event)
                        }} type="text" className="article-item-input" defaultValue={tag}/>
                    </div>
                    <div className="article-surface-upload-ctn">
                        <ImgUpload updateSurface={this.updateSurface}/>
                    </div>
                    <div className="article-item-ctn">
                        <span className="article-item-txt">描述：</span>
                        <textarea
                            onChange={(event) => {
                                this.descriptionChangeHandle(event)
                            }}
                            className="article-item-input large"
                            defaultValue={description}
                            cols="30"
                            rows="3"/>
                    </div>
                    <textarea
                        className="edit-panel"
                        onChange={(event) => {
                            this.contentChangeHandle(event)
                        }}
                        defaultValue={content}
                        name="content"
                        id="content"
                        cols="30"
                        rows="30"/>
                </div>
                <div className="right-preview-ctn">
                    <ReactMarkdown
                        source={content}
                        escapeHtml={false}
                        renderers={{
                            code: CodeBlock,
                            heading: HeadingBlock
                        }}
                    />
                </div>
                <div className="btn-group">
                    <button onClick={this.addArticleHandle} className="fr btn btn-primary">新增</button>
                </div>
            </div>
        );
    }
}

export default ArticleEditPage;