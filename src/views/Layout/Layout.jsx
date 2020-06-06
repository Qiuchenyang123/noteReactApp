import React, {Component} from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomeLayout from "../HomeLayout/HomeLayout";
import LoginCtn from "../../containers/LoginCtn/LoginCtn";
import RegisterCtn from "../../containers/RegisterCtn/RegisterCtn";
import HomeCtn from "../../containers/HomeCtn/HomeCtn";
// import Home from "../Home/Home";
import BlogCtn from "../../containers/Blog/BlogCtn";
import Diary from "../Diary/Diary";
import Message from "../Message/Message";
import About from "../About/About";
import ArticleEditPageCtn from "../../containers/Blog/ArticleEditPageCtn";
import ArticleCtn from "../../containers/Blog/ArticleCtn";
class Layout extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path={`/home`} render={() =>
                        <HomeLayout>
                            <Route path={`/home/index`} component={HomeCtn}/>
                            <Route path={`/home/blog`} component={BlogCtn}/>
                            <Route path={`/home/addArticle`} component={ArticleEditPageCtn}/>
                            <Route path={`/home/article/:id`} component={ArticleCtn}/>
                            <Route path={`/home/diary`} component={Diary}/>
                            <Route path={`/home/message`} component={Message}/>
                            <Route path={`/home/about`} component={About}/>
                        </HomeLayout>
                    }/>
                    <Route exact={true} path={`/login`} component={LoginCtn}/>
                    <Route exact={true} path={`/register`} component={RegisterCtn}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Layout;