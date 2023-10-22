import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import Icon from 'react-native-vector-icons/FontAwesome';

import { uploadPhotoStylesheet as styles } from './UploadPhotoStylesheet';

export default function CameraScreen({ updateForm }) {
  const [cameraPermission, setCameraPermission] = useState(false);
  const [galleryPermission, setGalleryPermission] = useState(false);

  const [camera, setCamera] = useState(null);
  const [cameraOpen, setCameraOpen] = useState(false);
  const [image, setImage] = useState({});
  const [type, setType] = useState(Camera.Constants.Type.back);

  async function getPermissions() {
    const cameraPerms = await Camera.requestCameraPermissionsAsync();
    setCameraPermission(cameraPerms.status === 'granted');

    const imagePermission = await ImagePicker.getMediaLibraryPermissionsAsync();
    setGalleryPermission(imagePermission.status === 'granted');

    if (!cameraPermission && !galleryPermission) {
      // alert('Permission for media access needed.');
    }
  }

  useEffect(() => {
    if (!camera) getPermissions();
  }, []);

  async function takePicture() {
    if (camera) {
      const photo = await camera.takePictureAsync(
        (options = { base64: true, quality: 1 })
      );
      // give feedback to user that pic was taken:
      // make a View that overlays the camera window
      // set it to animate to a dark opacity of grey
      // fade out to 0 opacity
      setCameraOpen(false);
      setImage({ localUri: photo.uri });
      updateForm('local_url', photo.base64);
    }
  }

  async function pickImage() {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
      base64: true
    });

    if (!result.canceled) {
      setCameraOpen(false);
      setImage({ localUri: result.assets?.[0].uri || result.uri });
      updateForm('local_url', result.assets?.[0].base64 || result.base64);
    }
  }

  const cameraComponent = (
    <View style={styles.cameraContainer}>
      {/* CAMERA COMPONENT */}
      <View style={styles.camera}>
        <Camera
          testID='camera-component'
          ref={ref => setCamera(ref)}
          style={styles.fixedRatio}
          type={type}
          ratio={'1:1'}
        />
        <TouchableOpacity
          style={{ width: 'auto', justifyContent: 'center', marginTop: 5 }}
          onPress={takePicture}
        >
          <Icon
            name='circle-thin'
            color={'lightgrey'}
            style={{ fontSize: 60, alignSelf: 'center' }}
          ></Icon>
        </TouchableOpacity>
      </View>
    </View>
  );
  return (
    <View style={styles.uploadPhoto}>
      {/* TOP NAV BAR */}
      <View testID='camera-view-top-nav-bar' style={styles.cameraTopBar}>
        <Text testID='photo-header' style={{ fontSize: 24 }}>
          Select Photo (optional)
        </Text>
      </View>
      {/* CAMERA MANAGEMENT OPTIONS */}
      <View style={styles.cameraManagementOptions}>
        <TouchableOpacity
          testID='gallery-button'
          onPress={pickImage}
          style={styles.button}
        >
          <Text>Gallery</Text>
        </TouchableOpacity>
        <Icon
          testID='camera-icon-button'
          name='camera'
          style={{ fontSize: 30, paddingRight: 35 }}
          onPress={() => setCameraOpen(prev => !prev)}
        ></Icon>
      </View>
      {/* CAMERA COMPONENT */}
      {cameraOpen && cameraComponent}
      {/* MEDIA VIEWING CONTAINER */}
      <View style={styles.mediaContainer}>
        {image && !cameraOpen && (
          <Image source={{ uri: image.localUri }} style={styles.image} />
        )}
      </View>
    </View>
  );
}
