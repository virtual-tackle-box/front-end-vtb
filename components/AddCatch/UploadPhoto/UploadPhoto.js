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
  const [imageUri, setImageUri] = useState(null);
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
      const photo = await camera.takePictureAsync(null);
      // give feedback to user that pic was taken:
      // make a View that overlays the camera window
      // set it to animate to a dark opacity of grey
      // fade out to 0 opacity
      setCameraOpen(false);
      setImageUri(photo.uri);
      updateForm('url', photo.uri);
    }
  }

  async function pickImage() {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1
    });

    if (!result.canceled) {
      setCameraOpen(false);
      setImageUri(result.assets?.[0].uri || result.uri);
      updateForm('url', result.assets?.[0].uri || result.uri);
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
            // move icon down a little bit
          ></Icon>
        </TouchableOpacity>
      </View>
    </View>
  );
  return (
    <View style={styles.uploadPhoto}>
      {/* TOP NAV BAR */}
      <View testID='camera-view-top-nav-bar' style={styles.cameraTopBar}>
        <Text testID='photo-header' style={{ fontSize: 24 }}>Select Photo (optional)</Text>
      </View>
      {/* CAMERA MANAGEMENT OPTIONS */}
      <View style={styles.cameraManagementOptions}>
        <TouchableOpacity testID='gallery-button' onPress={pickImage} style={styles.button}>
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
        {imageUri && !cameraOpen && (
          <Image source={{ uri: imageUri }} style={styles.image} />
        )}
      </View>
    </View>
  );
}
