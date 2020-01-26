import { Dimensions, StyleSheet } from 'react-native';

const width = Math.round(Dimensions.get('window').width) - 40;
const height = Math.round(Dimensions.get('window').height);

export const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        width,
        height,
        paddingVertical: 20,
        paddingBottom: 10
    }
});