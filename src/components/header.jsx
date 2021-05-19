import React, { Component, Fragment } from 'react';
import { Divider } from 'antd';

class Header extends Component {
    styles = {
        'h3-text': { marginBottom: '5px' },
        'Divider': { borderTop: '1px solid gray' }
    }
    render() { 
        return (
        <div>
            <h3 style = {this.styles['h3-text']}>Your Card</h3>
            <text style={this.styles['h3-text']}>
                Use this card to pay for programs in your plan.
                Purchases will be visible to your manager.
            </text>
            <br /><br />
            <Divider style={this.styles['Divider']} />
        </div>
        );
    }
}
 
export default Header;

