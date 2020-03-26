import React, {Component} from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "../Login/login";
import Register from "../Register/register";
class Layout extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/register" render={() => {
                        <Register />
                        }}>
                    </Route>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Layout;