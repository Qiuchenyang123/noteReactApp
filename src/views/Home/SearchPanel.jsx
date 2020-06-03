import React, {Component} from 'react';
import {SearchOutlined} from '@ant-design/icons'

class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sliderTop: 0
        };
        this.optionMouseEnterHandle = this.optionMouseEnterHandle.bind(this)
    }

    optionMouseEnterHandle(index) {
        this.setState({
            sliderTop: index * 46
        })
    }

    render() {
        return (
            <div className="search-panel-container">
                <div className="search-item">
                    <input type="text" placeholder="请输入关键字"/>
                    <button className="btn-search"><SearchOutlined /></button>
                </div>
                <div className="search-options">
                    <ul className="search-options-list">
                        <li className="search-slider" style={{top: this.state.sliderTop + 'px'}}/>
                        <li className="search-options-item" onMouseEnter={() => {this.optionMouseEnterHandle(0)}}>content</li>
                        <li className="search-options-item" onMouseEnter={() => {this.optionMouseEnterHandle(1)}}>content</li>
                        <li className="search-options-item" onMouseEnter={() => {this.optionMouseEnterHandle(2)}}>content</li>
                        <li className="search-options-item" onMouseEnter={() => {this.optionMouseEnterHandle(3)}}>content</li>
                        <li className="search-options-item" onMouseEnter={() => {this.optionMouseEnterHandle(4)}}>content</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default SearchPanel;