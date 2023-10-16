import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Button,
  StyleSheet
} from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import { uploadPhotoStylesheet as styles } from './UploadPhotoStylesheet';

export default function CameraScreen() {
  const [cameraPermission, setCameraPermission] = useState(false);
  const [galleryPermission, setGalleryPermission] = useState(false);

  const [camera, setCamera] = useState(null);
  const [imageUri, setImageUri] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  async function getPermissions() {
    const cameraPerms = await Camera.requestCameraPermissionsAsync();
    // const cameraPerms = await requestPermission();
    console.log('camera permissions: ', cameraPerms);

    setCameraPermission(cameraPerms.status === 'granted');

    const imagePermission = await ImagePicker.getMediaLibraryPermissionsAsync();
    console.log('Image permission object: ', imagePermission);

    setGalleryPermission(imagePermission.status === 'granted');

    if (!cameraPermission && !galleryPermission) {
      alert('Permission for media access needed.');
    }
  }

  useEffect(() => {
    getPermissions();
  }, []);

  const takePicture = async () => {
    if (camera) {
      // const options = { quality: 0.5, base64: true };
      const photo = await camera.takePictureAsync(null);
      console.log('this is the image data: ', photo);
      console.log('this is the data.uri:', photo.uri);
      setImageUri(photo.uri);
    }
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1
    });

    console.log('Result of pick image from gallery: ', result);
    if (!result.canceled) {
      setImageUri(result.uri);
    }
  };

  return (
    <View style={styles.uploadPhoto}>
      <View testID='camera-view-top-nav-bar' style={styles.cameraTopBar}>
        <Button title={'Cancel'}></Button>
        <Text style={{ fontSize: '20px', fontWeight: '600'}}>Select Photo</Text>
        <Button title={'Skip'}></Button>
      </View>

      <View style={styles.cameraContainer}>
        {/* CAMERA COMPONENT */}
      <View style={styles.camera}>
        <Camera
          ref={ref => setCamera(ref)}
          style={styles.fixedRatio}
          type={type}
          ratio={'1:1'}
        />
      </View>

        <Button title={'Take Picture'} onPress={takePicture} />
        <Button title={'Gallery'} onPress={pickImage} />

        {imageUri && <Image source={{ uri: imageUri }} style={{ flex: 1 }} />}
      </View>
    </View>
  );

  // const [type, setType] = useState(CameraType.back);
  // const [permission, requestPermission] = Camera.useCameraPermissions();
  // const cameraRef = useRef(null);

  // // useEffect(() => {
  // //   getCameraPermission();
  // // }, []);

  // // async function takePicture() {
  // //   if (cameraRef.current) {
  // //     const options = { quality: 0.5, base64: true };
  // //     const photo = await cameraRef.current.takePictureAsync(options);
  // //     console.log(photo);
  // //   }
  // // }
  // if (!permission) {
  //   // Camera permissions are still loading
  //   return <View />;
  // }

  // if (!permission.granted) {
  //   // Camera permissions are not granted yet
  //   return (
  //     <View style={styles.container}>
  //       <Text style={{ textAlign: 'center' }}>
  //         We need your permission to show the camera
  //       </Text>
  //       <Button onPress={requestPermission} title='grant permission' />
  //     </View>
  //   );
  // }

  // function toggleCameraType() {
  //   setType(current =>
  //     current === CameraType.back ? CameraType.front : CameraType.back
  //   );
  // }

  // return (
  //   <View style={styles.container}>
  //     <Camera style={styles.camera} type={type}>
  //       <View style={styles.buttonContainer}>
  //         <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
  //           <Text style={styles.text}>Flip Camera</Text>
  //         </TouchableOpacity>
  //       </View>
  //     </Camera>
  //   </View>
  // );
}

