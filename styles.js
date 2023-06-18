import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    backButton: {
        position: 'absolute',
        top: 20,
        left: 20,
    },
    backButtonText: {
        fontSize: 44,
        color: '#2196F3',
    },
    subheaderText: {
        color: '#2196F3',
        fontSize: 26,
        position: 'relative', 
        fontWeight: 'bold',
        padding: 5
      },
});
