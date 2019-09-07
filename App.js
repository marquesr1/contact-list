import { createStackNavigator } from 'react-navigation-stack';

import { createAppContainer } from 'react-navigation';

import PeoplePage from './src/screens/PeoplePage';
import PersonDetail from "./src/screens/PersonDetail";
import capitalizeFirstLetter from "./src/util/capitalizeFirstLetter";

const StackNavigator = createStackNavigator(
    {
        'Main': {
            screen: PeoplePage,
        },
        'PersonDetail': {
            screen: PersonDetail,
            navigationOptions: ( { navigation } ) => {

                const personName = navigation.state.params.person.name.first;

                return ( {
                    title: capitalizeFirstLetter(personName),
                    headerTitleStyle: {
                        color: 'white',
                        fontSize: 30
                    }
                } )
            }
        },
    },
    {
        defaultNavigationOptions: {
            title: 'Contatos',
            headerTitleStyle: {
                color: 'white',
                fontSize: 30,
                flexGrow: 1,
                textAlign: 'center',
            },
            headerStyle: {
                backgroundColor: '#6ca2f7',
                borderBottomWidht: 1,
                borderBottomColor: '#c5c5c5',
            },
        },
    },
);

const AppContainer = createAppContainer( StackNavigator );

export default AppContainer;
