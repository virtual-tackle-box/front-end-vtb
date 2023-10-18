import { StyleSheet } from 'react-native';

export const uploadPhotoStylesheet = StyleSheet.create({
  uploadPhoto: {
    position: 'relative',
    flex: 1
  },

  cameraTopBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    height: 80
  },

  cameraManagementOptions: {
    height: 100,
    width: '100%',

    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 30,
    alignItems: 'center'
  },

  button: {
    width: 80,
    height: 24,
    backgroundColor: 'lightgrey',
    borderColor: 'black',
    borderWidth: '1px',
    borderRadius: '5px',
    alignItems: 'center',
    justifyContent: 'center'
  },

  submitButton: {
    backgroundColor: '#6ccc60',
    marginTop: 'auto'
  },

  cameraContainer: {
    width: '90%',
    height: 410,
    zIndex: 1,
    borderColor: 'green',
    borderWidth: '1px',
    alignSelf: 'center',
    borderRadius: 6,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 6,
      height: 6
    },
    shadowOpacity: 0.75,
    borderWidth: '2px',
    borderColor: 'green',
  },

  camera: {
    paddingTop: 14,
    height: 400,

    justifyContent: 'center',
    alignSelf: 'center'
  },

  fixedRatio: {
    flex: 1,
    aspectRatio: 1
  },

  mediaContainer: {
    height: 800,
    padding: 20
  },

  image: {
    width: 350,
    height: 350,
    alignSelf: 'center'
  }
});

/* Consider using Animate.View to control how this view comes in */
/* Consider using zindex to stack the upload photo comp on top of the map */
