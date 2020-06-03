import React, {Component} from 'react';
import '../../assert/css/views/HomeLayout/homeLayout.scss'
import Nav from "../../component/Nav/Nav";


class HomeLayout extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="home-layout">
                <div className="nav-wrap">
                    <Nav/>
                </div>
                <div className="home-content">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default HomeLayout;