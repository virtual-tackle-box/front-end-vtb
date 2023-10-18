import { StyleSheet } from 'react-native';

export const uploadPhotoStylesheet = StyleSheet.create({
  uploadPhoto: {
    flex: 1,
    borderColor: 'blue',
    borderWidth: '2px'
  },

  cameraContainer: {
    flex: 1,
    width: '100%',
    position: 'absolute',
    bottom: 0,
    borderColor: 'blue',
    borderWidth: '2px'
  },

  camera: {
    flex: 1,
    flexDirection: 'row'
  },

  fixedRatio: {
    flex: 1,
    aspectRatio: 1
  },
  button: {
    flex: 0.1,
    padding: 10,
    alignSelf: 'flex-end',
    alignItems: 'center'
  },

  cameraTopBar: {
    flex: 1,
    position: 'absolute',
    top: 100,
    borderTopLeftRadius: '10px',
    borderTopRightRadius: '10px',

    borderColor: 'blue',
    borderWidth: '2px',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%'
  }
});

/* Consider using Animate.View to control how this view comes in */
/* Consider using zindex to stack the upload photo comp on top of the map */
