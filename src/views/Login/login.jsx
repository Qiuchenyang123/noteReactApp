import React, {Component} from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

class Login extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={() => {import('')}}></Route>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Login;