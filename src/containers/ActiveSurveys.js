import React, {Component} from 'react';
import {Grid, Container, Header} from 'semantic-ui-react';

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
            <Grid padded>
                <Grid.Row centered>
                    <Container>
                        <Header as='h1'>Active Surveys</Header>
                        <div>
                            {surveys.map(survey =>
                              <a href={survey.id}>{survey.name}</a>
                          )}
                        </div>
                    </Container>
                </Grid.Row>
            </Grid>
        );
    }
}