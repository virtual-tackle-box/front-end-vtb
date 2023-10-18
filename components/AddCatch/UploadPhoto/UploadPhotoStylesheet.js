import { StyleSheet } from 'react-native';

export const uploadPhotoStylesheet = StyleSheet.create({
  uploadPhoto: {
    position: 'relative',
    flex: 1
  },

  cameraTopBar: {
    // backgroundColor: '#66b3ff',
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
    alignItems: 'center',
    // backgroundColor: '#66b3ff'
  },

  manageBtn: {
    width: 80,
    height: 24,
    backgroundColor: 'lightgrey',
    borderColor: 'black',
    borderWidth: '1px',
    borderRadius: '5px',
    alignItems: 'center',
    justifyContent: 'center'
  },

  cameraContainer: {
    position: 'absolute',
    top: 200,
    width: '100%',
    height: 425,
    zIndex: 1
  },

  camera: {
    height: 420,

    justifyContent: 'center',
    alignSelf: 'center'
  },

  captureButton: {},

  fixedRatio: {
    flex: 1,
    aspectRatio: 1
  },

  mediaContainer: {
    height: 800,
    padding: 20
    // backgroundColor: '#66b3ff'
  }
});

/* Consider using Animate.View to control how this view comes in */
/* Consider using zindex to stack the upload photo comp on top of the map */
