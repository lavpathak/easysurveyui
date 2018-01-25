import React, {Component} from 'react';
import {List, Container, Header} from 'semantic-ui-react';
import SurveyLine from '../components/SurveyLine';

export default class ActiveSurvey extends Component {

    constructor() {
        super();
        this.state = {
            surveys: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:8081/surveys')
        .then(response => response.json())
        .then(data => this.setState({surveys: data.results}));
    }

    render() {
        const { surveys } = this.state;

        return (
            <List divided relaxed>
                <List.Item centered>
                    <Container>
                        <Header as='h1'>Active Surveys</Header>
                    </Container>
                </List.Item>
                {surveys.map(survey =>
                    <SurveyLine {...survey} />
                )}
            </List>
        );
    }
}