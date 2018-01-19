import React, {Component} from 'react';
import MainHeader from './MainHeader';
import ActiveSurveys from './ActiveSurveys';
import {Grid} from 'semantic-ui-react';
import '../styles.less';

export default class MainLayout extends Component {
    render() {
        return (
            <Grid padded>
                <Grid.Row className='page-header'>
                    <MainHeader />
                </Grid.Row>
                <Grid.Row centered>
                    <ActiveSurveys />
                </Grid.Row>    
            </Grid>    
        );
    }      
}