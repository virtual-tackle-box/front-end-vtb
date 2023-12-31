import { StyleSheet } from 'react-native';

const dashboardStyles = StyleSheet.create({
  dashContainer: {
    flex: 1
  },

  mapContainer: {
    flex: 0.9
  },

  container: {
    flex: 0.1,
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
    flex: 0.3333,
    alignItems: 'center'
  },

  text: {
    color: 'white'
  }
});

export default dashboardStyles;
