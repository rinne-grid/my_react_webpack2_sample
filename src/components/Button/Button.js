import React from 'react';

export default class Button extends React.Component {
    render() {
        return (
            <button className="l" onClick={this.props.onClick}>{this.props.children}</button>
        );
    }
}