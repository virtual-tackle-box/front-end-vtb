import { StyleSheet } from 'react-native';

export const CatchLogStylesheet = StyleSheet.create({
  catchCardContainer: {
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 150,
    gap: 10
  },

  catchCard: {
    justifyContent: 'space-around',
    gap: 15,

    backgroundColor: '#808000',
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
  },

  delBtnContainer: {
    width: 35,
    height: 35,

    borderRadius: '5px',

    backgroundColor: '#5e5e01',

    marginLeft: 12,
    marginTop: 5
  },

  delBtn: {
    fontSize: 20,
    paddingLeft: 11,
    paddingTop: 5
  },

  image: {
    width: 300,
    height: 300,
    alignSelf: 'center'
  }
});
