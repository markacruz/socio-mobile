import { StyleSheet } from 'react-native';

const ProfileStyles = StyleSheet.create({
    statistics: {
        marginHorizontal: 10,
        textAlign: 'center',
    },
    statisticsText: {
        fontWeight: 'bold'
    },
    postButton: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
    },
    postButtonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
    },
});
  
export default ProfileStyles;