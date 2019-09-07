import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import PeopleListItem from './PeopleListItem';

const PeopleList = props => {
    const { people, onPressItem } = props;

    return (
        <FlatList
            style={ styles.container }
            data={ people }
            renderItem={ ( { item } ) => (
                <PeopleListItem
                    person={ item }
                    onPressItem={ onPressItem }
                />
            ) }
            keyExtractor={ item => item.name.first }
        />
    );
};

const styles = StyleSheet.create( {
    container: {
        backgroundColor: '#e2f9ff',
    },
} );

export default PeopleList;
