import React, { Component } from 'react';
import { Platform, Text, View } from 'react-native';
import axios from 'axios';

import Header from '../components/Header';
import PeopleList from '../components/PeopleList';

export default class PeoplePage extends Component {
    constructor( props ) {
        super( props );

        this.state = {
            people: [],
        };
    }

    componentDidMount() {
        axios.get( 'https://randomuser.me/api/?nat=br&results=30' ).then( response => {
            const { results } = response.data;
            this.setState( {
                people: results,
            } );
        } );
    }

    render() {
        return (
            <View>
                <PeopleList
                    people={ this.state.people }
                    onPressItem={ ( parameters ) => this.props.navigation.navigate( 'PersonDetail', parameters ) }
                />
            </View>
        );
    }
}
