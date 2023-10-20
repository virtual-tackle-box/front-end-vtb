import { StyleSheet } from 'react-native';

export const CatchLogStylesheet = StyleSheet.create({
  catchCardContainer: {
    alignItems: 'center',
    marginTop: 50,
    gap: 10
  },

  catchCard: {
    // flexDirection: 'row',
    justifyContent: 'space-around',
    gap: 15,

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
