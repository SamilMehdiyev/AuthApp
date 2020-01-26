import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import PropTypes from 'prop-types';

import { styles } from './styles';

export const SignOutButton = (props) => {
    const { onPress, title } = props;

    return (
        <TouchableOpacity 
            style={styles.container} 
            onPress={() => { onPress(); }}
        >
            <View style={styles.view}>
                <Text style={styles.text}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
};

SignOutButton.propTypes = {
    onPress: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired
};