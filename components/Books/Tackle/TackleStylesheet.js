import { StyleSheet } from 'react-native';

export const TackleStylesheet = StyleSheet.create({
  lureCardContainer: {
    alignItems: 'center',
    marginTop: 50,
    gap: 10
  },

  lureCard: {
    flexDirection: 'row',
    justifyContent: 'space-around',

    backgroundColor: 'olive',
    shadowColor: '#000',
    shadowOffset: {
      width: 6,
      height: 6
    },
    shadowOpacity: 0.75,

    borderWidth: '1px',
    borderColor: 'black',
    borderRadius: '8px',

    width: '80%'
  }
});
