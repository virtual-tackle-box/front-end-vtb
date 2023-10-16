import { StyleSheet } from 'react-native';

const dashboardStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',

    position: 'absolute',
    bottom: 0,
    paddingTop: '4%',

    width: '100%',
    height: '10%',

    backgroundColor: '#25292e'
  },

  iconEl: {
    flex: .3333,
    alignItems: 'center'
  },

  text: {
    color: 'white'
  }
});


export default dashboardStyles