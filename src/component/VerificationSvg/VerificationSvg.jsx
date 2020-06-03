import React, {Component, createRef} from 'react';
import '../../assert/css/component/VerificationSvg.scss'

class VerificationSvg extends Component{
    constructor(props) {
        super(props);
        this.svgCtn = createRef();
        this.svgCtn2 = createRef();
        console.log(21, this.props)
    }

    componentDidMount() {
        this.svgCtn.current.innerHTML = this.props.svg
    }

    render() {
        return (
            <div className="svgCtn">
                <div ref={this.svgCtn}></div>
            </div>
        )
    }
}

export default VerificationSvg;