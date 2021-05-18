import React, { Component, Fragment } from 'react';

class RightPanel extends Component {
    styles = {
        'paragraph-9': {
            paddingLeft: '0em',
            color: '#7f8083'
        }
    }

    render() { 
        return ( 
            <div>
                <p style={this.styles['paragraph-9']}>CARD HOLDER</p>
                <p style={this.styles['paragraph-9']}>BILLING ADDRESS</p>
            </div>
        );
    }
}
 
export default RightPanel;