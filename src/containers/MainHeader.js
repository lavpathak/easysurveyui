import React, {Component} from 'react';
import {Grid, Header, Button} from 'semantic-ui-react';

export default class MainHeader extends Component {
    render() {
        return (
            <Grid container>
                <Grid.Column textAlign='left' width={12}>
                    <Header as='h1'>Easy Survey</Header>
                </Grid.Column>
                <Grid.Column textAlign='right'>
                    <Button>Menu</Button>
                </Grid.Column>
            </Grid>
        );
    }
}