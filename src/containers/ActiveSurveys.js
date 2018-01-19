import React, {Component} from 'react';
import {Grid, Container, Header} from 'semantic-ui-react';

export default class ActiveSurvey extends Component {
    render() {
        return (
            <Grid padded>
                <Grid.Row centered>
                    <Container>
                        <Header as='h1'>Active Surveys</Header>

                    </Container>
                </Grid.Row>
            </Grid>
        );
    }
}