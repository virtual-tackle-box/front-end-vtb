import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },

  formHeader: {
    fontSize: 24,
    marginBottom: 20,
    color: 'white',
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

  labels: {
    color: 'white',
  },

  submitButton: {
    width: 200,
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
  }
});