import React, {Component} from 'react';
import {List} from 'semantic-ui-react';

export default class SurveyLine extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <List.Item>
                <List.Content>
                    {this.props.id}. {this.props.name}
                </List.Content>
            </List.Item>
        );
    }
}