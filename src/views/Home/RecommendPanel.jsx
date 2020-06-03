import React, {Component} from 'react';
import NormalPanel from "../../component/NormalPanel/NormalPanel";

class RecommendPanel extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const {title} = this.props;
        return (
            <NormalPanel title={title}/>
        );
    }
}

export default RecommendPanel;