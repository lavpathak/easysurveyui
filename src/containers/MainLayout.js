import React, {Component} from 'react';
import MainHeader from './MainHeader';
import {Grid} from 'semantic-ui-react';
import '../styles.less';

export default class MainLayout extends Component {
    render() {
        return (
            <Grid container padded>
                <Grid.Row className='header'>
                    <MainHeader />
                </Grid.Row>
                <Grid.Row>
                    <p>This is main layout of easy survey.</p>
                </Grid.Row>    
            </Grid>    
        );
    }      
}