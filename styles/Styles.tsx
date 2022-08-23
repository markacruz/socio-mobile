import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    textBox: {
        outlineColor: 'black',
        height: 60,
        color: 'rgb(90, 90, 90)',
        fontSize: 20,
        fontFamily: 'sans-serif-light',
        borderRadius: 15,
        margin: 12,
        padding: 14,
        backgroundColor: 'rgba(255, 255, 255, 0.4)'
    },
    backgroundImage: 
    {
        width: '100%',
        height: '100%'
    },
    loginButton: {
        marginTop: 10
    }
    
});
  
export default Styles;