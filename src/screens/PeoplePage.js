import React, { Component } from 'react';
import { Platform, Text, View, ActivityIndicator, StyleSheet } from 'react-native';
import axios from 'axios';

import PeopleList from '../components/PeopleList';

export default class PeoplePage extends Component {
    constructor( props ) {
        super( props );

        this.state = {
            people: [],
            loading: false,
        };
    }

    componentDidMount() {
        this.setState( { loading: true } )
        axios.get( 'https://randomuser.me/api/?nat=br&results=700' ).then( response => {
            const { results } = response.data;
            this.setState( {
                people: results,
                loading: false,
            } );
        } );
    }

    render() {
        return (
            <View style={ styles.container }>
                {
                    this.state.loading ?
                        <ActivityIndicator size='large' color='#cbcbcb'/>
                        :
                        <PeopleList
                            people={ this.state.people }
                            onPressItem={ ( parameters ) => this.props.navigation.navigate( 'PersonDetail', parameters ) }
                        />
                }
            </View>
        );
    }
}

const styles = StyleSheet.create( {
    container: {
        flex: 1,
        justifyContent: 'center',
    },
} );
