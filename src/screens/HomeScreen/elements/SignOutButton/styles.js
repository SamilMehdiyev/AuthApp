
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: { 
        width: 250, 
        height: 50,
        borderRadius: 25,
        backgroundColor: '#F9A220',
        marginTop: 20
    },
    view: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconView: {
        paddingHorizontal: 20
    },
    icon: { 
        height: 50, 
        width: 50 
    },
    text: {
        fontSize: 24,
        color: '#ffffff',
        textAlign: 'center'
    }
});