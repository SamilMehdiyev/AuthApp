import React, { Component } from 'react';

import { GoogleSignIn } from './components/GoogleSignIn';

class AuthScreen extends Component {    
    render() {
        return (
            <GoogleSignIn />
        );
    }
}

export default AuthScreen;