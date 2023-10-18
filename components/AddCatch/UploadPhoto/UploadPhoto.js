import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Button,
  StyleSheet,
  SafeAreaView
} from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import Icon from 'react-native-vector-icons/FontAwesome';

import { uploadPhotoStylesheet as styles } from './UploadPhotoStylesheet';

export default function CameraScreen() {
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
      /* alert('Permission for media access needed.'); */
    }
  }

  useEffect(() => {
    if (!camera) getPermissions();
  }, []);

  async function takePicture() {
    if (camera) {
      const photo = await camera.takePictureAsync(null);
      console.log('Pic taken: ', photo);
      setImageUri(photo.uri);
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
      setImageUri(result.uri);
    }
  }

  const cameraComponent = cameraOpen ? (
    <View style={styles.cameraContainer}>
      {/* CAMERA COMPONENT */}
      <View style={styles.camera}>
        <Camera
          ref={ref => setCamera(ref)}
          style={styles.fixedRatio}
          type={type}
          ratio={'1:1'}
        />
        <TouchableOpacity
          style={{ width: 'auto', justifyContent: 'center' }}
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
  ) : (
    <View></View>
  );

  return (
    <SafeAreaView>
      <View style={styles.uploadPhoto}>
        {/* TOP NAV BAR */}
        <View testID='camera-view-top-nav-bar' style={styles.cameraTopBar}>
          <Button title={'Cancel'} color={'black'}></Button>
          <Text style={{ fontSize: 20, fontWeight: '600' }}>Select Photo</Text>
          <Button title={'Skip'} color={'black'}></Button>
        </View>

        {/* CAMERA MANAGEMENT OPTIONS */}
        <View style={styles.cameraManagementOptions}>
          <TouchableOpacity onPress={pickImage} style={styles.manageBtn}>
            <Text>Manage</Text>
          </TouchableOpacity>
          <Icon
            name='camera'
            style={{ fontSize: 30, paddingRight: 35 }}
            onPress={() => setCameraOpen(prev => !prev)}
          ></Icon>
        </View>

        {/* CAMERA COMPONENT */}
        {cameraComponent}

        {/* MEDIA VIEWING CONTAINER */}
        <View style={styles.mediaContainer}>
          {imageUri && (
            <Image
              source={{ uri: imageUri }}
              style={{ height: 120, width: 120 }}
            />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}
