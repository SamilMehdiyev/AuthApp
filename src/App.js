import React, { Component } from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import AuthScreen from './screens/AuthScreen';
import HomeScreen from './screens/HomeScreen';

const AuthStackNavigator = createStackNavigator({
    Auth: {
        screen: AuthScreen,
        navigationOptions: () => ({
            headerTransparent: true,
            header: null
        }),
    }
});

const HomeScreenStackNavigator = createStackNavigator({
    HomeScreen: {
        screen: HomeScreen,
        navigationOptions: () => ({
            header: null,
            headerTransparent: true,
        })
    },
});

const AppNavigator = createSwitchNavigator({
    Auth: AuthStackNavigator,
    Home: HomeScreenStackNavigator,
});

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
    render() {
        return (
            <AppContainer />
        );
    }
}