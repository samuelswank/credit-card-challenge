import React, { Component } from 'react';
import getJSONData from '../getJSONData';

const urlPrefix = 'https://run.mocky.io/v3/';
const cardOverviewURL = urlPrefix + '9761bf82-c85e-4435-a97e-20888cec9b9f';
const cardDetailsURL = urlPrefix + 'd50e1b3b-017b-4f52-abc5-51fdde133048';

const cardOverview = getJSONData(cardOverviewURL);
const cardDetails = getJSONData(cardDetailsURL);

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
                <text>{cardOverview['cardHolder']}</text>
                <p style={this.styles['paragraph-9']}>BILLING ADDRESS</p>
            </div>
        );
    }
}
 
export { RightPanel };