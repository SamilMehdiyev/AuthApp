import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { GoogleSignin } from '@react-native-community/google-signin';
import auth from '@react-native-firebase/auth';

import googleConfig from '../../../../configs/google';
import { styles } from './styles';

GoogleSignin.configure(googleConfig);

const signIn = async () => {
    try {
        await GoogleSignin.hasPlayServices();

        GoogleSignin.signIn()
        .then((userInfo) => {
            const credential = auth.GoogleAuthProvider.credential(userInfo.idToken, userInfo.accessToken);
            
            auth().signInWithCredential(credential)
            .then((result) => {
                const user = result.user.toJSON();

                console.log('Successful authentication');
                console.log(user);
            })
            .catch((error) => {
                console.log('Error during authentication process');
                console.log(error);
            });
        })
        .catch((error) => {
            console.log('Error during authentication process');
            console.log(error);
        });
    } catch (error) {
        console.log('Error during authentication process');
        console.log(error);
    }
};

export const GoogleSignIn = () => {
    return (
        <TouchableOpacity 
            style={styles.container} 
            onPress={async () => { await signIn(); }}
        >
            <View style={styles.view}>
                <Text style={styles.text}>Sign in with Google</Text>
            </View>
        </TouchableOpacity>
    );
};

GoogleSignIn.propTypes = {
    isSigninInProgress: PropTypes.bool.isRequired,
    changeProgressStatus: PropTypes.func.isRequired,
    setUserToProps: PropTypes.func.isRequired
};