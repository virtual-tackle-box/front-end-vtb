import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#5A5A5A'
        
    },

    dataContainer: {
        
        height: '20%',
        width: '80%',
        backgroundColor: 'black',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        margin: 10,
        borderWidth: 2,
    },

    imageContainer:{
        width: 100,
        height: 100,
    },

    images:{
        width: 100,
        height: 100,
    },

    textContainer:{
        width: '40%'
    },

    text:{
        fontSize: 35,
        color: 'silver',
    }

})