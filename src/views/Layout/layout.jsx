import React, {Component} from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "../Login/login";
import Register from "../Register/register";
class Layout extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Layout;