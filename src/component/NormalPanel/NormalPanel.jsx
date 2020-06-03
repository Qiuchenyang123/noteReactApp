import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import '../../assert/css/component/NormalPanel.scss'

class NormalPanel extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        const {title} = this.props;
        return (
            <div className="normal-panel-container">
                <p className="panel-title">{title}</p>
                <ul className="panel-item-list">
                    <li className="panel-item">
                        <span className="panel-item-index">1</span>
                        <Link>content</Link>
                    </li>
                    <li className="panel-item">
                        <span className="panel-item-index">1</span>
                        <Link>content</Link>
                    </li>
                    <li className="panel-item">
                        <span className="panel-item-index">1</span>
                        <Link>content</Link>
                    </li>
                    <li className="panel-item">
                        <span className="panel-item-index">1</span>
                        <Link>content</Link>
                    </li>
                    <li className="panel-item">
                        <span className="panel-item-index">1</span>
                        <Link>content</Link>
                    </li>
                </ul>
            </div>
        );
    }
}

export default NormalPanel;