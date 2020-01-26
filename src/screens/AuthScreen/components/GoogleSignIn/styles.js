import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: { 
        width: 275, 
        height: 50,
        borderRadius: 25,
        backgroundColor: '#f2767b',
        marginTop: 20
    },
    view: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    iconView: {
        paddingHorizontal: 15
    },
    icon: { 
        height: 50, 
        width: 50 
    },
    text: {
        fontSize: 18,
        color: '#ffffff',
        textAlign: 'center'
    }
});