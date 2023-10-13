import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#66b3ff'
    },

    logoContainer: {
        flex: .4, 
        justifyContent: 'center',
        alignItems: 'center',
      },
    
    loginContainer: {
        flex: .6,
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },

    input: {
        backgroundColor: 'white',
        height: 40,
        margin: 12,
        width: 200,
        borderWidth: 1,
        padding: 10,
        borderRadius: 5, 
        marginBottom: 10,
    },

    buttonContainer: {
        backgroundColor: 'darkgreen',
        borderRadius: 5,
        width: 150,
        marginTop: 10,
    },

    loginText:{
        marginTop: 50,
    },

    logoImage:{
        width: 350,
        height: 50,
    },

})

export default styles;