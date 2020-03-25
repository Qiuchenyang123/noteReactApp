import React, {Component} from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "../Login/login";

class Layout extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={Login}></Route>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Layout;