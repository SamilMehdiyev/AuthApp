import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { SignOutButton } from './elements/SignOutButton';

import { styles } from './styles';

class HomeScreen extends Component {
    render() {
        // const { navigation } = this.props;

        return (
            <View style={styles.container}>
                <Text>Signed In</Text>
                <SignOutButton onPress={() => console.log('sign out button pressed')} title='Sign Out' />
            </View>
        );
    }
}

export default HomeScreen;