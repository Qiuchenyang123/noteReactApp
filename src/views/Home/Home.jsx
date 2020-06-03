import React, {Component} from 'react';
import SearchPanel from "./SearchPanel";
import PopularPanel from "./PopularPanel";
import RecommendPanel from "./RecommendPanel";
import ArticleItem from "../../component/ArticleItem/ArticleItem";
import '../../assert/css/views/Home/home.scss'
import {fetchVerificationSvg} from "../../actions/userActions";
import VerificationSvg from "../../component/VerificationSvg/VerificationSvg";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            _verificationCodeSvg: '',
            num: 1
        }
    }
    componentDidMount() {
        fetchVerificationSvg()
            .then(res => {
                console.log(24, res, this);
                this.setState({
                    _verificationCodeSvg: res.data.data.svg,
                    email: '123321123'
                });
                console.log(this.state)
            }).catch(err => {
            console.log(err);
        })
    }
    render() {
        return (
            <div className="home-container">
                <div className="article-wrap">
                    <ul className="article-list">
                        <ArticleItem/>
                    </ul>
                </div>
                <div className="side-panel-wrap">
                    <div className="search-panel-wrap">
                        <SearchPanel/>
                    </div>
                    <div className="popular-panel-wrap">
                        <PopularPanel title={`热门文章`}/>
                    </div>
                    <div className="recommend-panel-wrap">
                        <RecommendPanel title={`推荐`}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;