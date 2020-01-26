import React, { Component } from 'react';
import { View } from 'react-native';

import { GoogleSignIn } from './components/GoogleSignIn';

class AuthScreen extends Component {    
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <GoogleSignIn />
            </View>
        );
    }
}

export default AuthScreen;