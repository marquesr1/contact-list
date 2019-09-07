import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import Line from "../components/Line";

export default class PersonDetail extends Component {
    render() {

        const { person } = this.props.navigation.state.params;
        const picURL = person.picture.large;

        return (
            <View style={ styles.container }>
                <Image source={ { uri: picURL } }
                       style={ styles.avatar }
                />
                <View style={ styles.detailContainer }>
                    <Line label='E-mail: ' content={ person.email }/>
                    <Line label='Cidade: ' content={ person.location.city }/>
                    <Line label='Estado: ' content={ person.location.state }/>
                    <Line label='Celular: ' content={ person.cell }/>
                    <Line label='Nacionalidade: ' content={ person.nat }/>
                    <Line label='Profissão: ' content={ person.profissao }/>
                </View>
            </View> );
    }
}

const styles = StyleSheet.create( {
    container: {
        padding: 15,
    },
    avatar: {
        aspectRatio: 1,
        borderRadius: 5,
    },
    detailContainer: {
        backgroundColor: '#e2f9ff',
        marginTop: 20,
        elevation: 1,
    }
} );