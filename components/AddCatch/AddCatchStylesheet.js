import { StyleSheet } from 'react-native';

export const AddCatchStylesheet = StyleSheet.create({
  submitButton: {
    width: '80%',
    height: 40,
    backgroundColor: 'lightgrey',
    borderColor: 'black',
    borderWidth: '1px',
    borderRadius: '5px',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6ccc60',
    margin: 40
  },

  successToast: {
    backgroundColor: 'lightgreen',
    position: 'absolute',
    top: 150,
  }
});
