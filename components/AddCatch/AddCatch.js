import { ScrollView, Text, TouchableOpacity } from 'react-native';
import { Header } from 'react-native-elements';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import CameraScreen from './UploadPhoto/UploadPhoto';
import AddFish from './AddFish/AddFish';
import AddLure from './LureForm/LureForm';
import AddSpot from './AddSpot/AddSpot';
import CatchModal from './CatchModal/CatchModal';

import { postNewCatch, postImageToCloudinary } from '../../fetchCalls';
import { useUserContext } from '../UserContext/UserContext';

import { AddCatchStylesheet as styles } from './AddCatchStylesheet';

import { useToast } from "react-native-toast-notifications";

import PropTypes from 'prop-types';

export default function AddCatch({ route }) {
  const navigation = useNavigation();
  const { lat, lon } = route.params;
  
  const [formData, setFormData] = useState({
    spot_name: '',
    latitude: lat,
    longitude: lon,
    species: '',
    weight: 0.0,
    length: 0.0,
    lure: '',
    local_url: '',
    cloudinary_urls: []
  });
  const [error, setError] = useState('');
  const [modalVisible, setModalVisible] = useState(true);

  const toast = useToast();

  const { userID, setShowMarker } = useUserContext();

  function updateForm(name, value) {
    setFormData(prev => {
      return {
        ...prev,
        [name]: value
      };
    });
  }

  async function submitForm() {
    if (!formData.spot_name.length || !formData.species.length) {
      setError('Please fill out required form fields.');
      return;
    }
    setModalVisible(true)
    if (formData.local_url.length) {
      
      const cloudURL = await postImageToCloudinary(formData.local_url);
      setFormData(formData.cloudinary_urls.push(cloudURL.url));
    }
    
    await postNewCatch(userID, formData);
    setModalVisible(false);
    toast.show("Catch logged!", { type: 'success', duration: 2000})
    setShowMarker(false);
    navigation.navigate('CatchLog');
  }

  function navToDash() {
    navigation.navigate('Dashboard');
  }

  return (
    <>
      <Header
        leftComponent={
          <TouchableOpacity onPress={navToDash}>
            <Text>Cancel</Text>
          </TouchableOpacity>
        }
        centerComponent={{ text: 'ADD CATCH', style: { fontSize: 25 } }}
        backgroundColor='#F0EAD6'
      />
      <ScrollView
        testID='catch-form-container'
        style={{ height: '100%', backgroundColor: '#F0EAD6' }}
      >
        <Text style={{ marginLeft: 10 }}>
          * indicates a required form field
        </Text>
        <AddSpot updateForm={updateForm} spot={formData.spot_name} />
        <AddFish
          formData={{
            species: formData.species,
            weight: formData.weight,
            length: formData.length
          }}
          updateForm={updateForm}
        />
        <AddLure updateForm={updateForm} lure={formData.lure} />
        <CameraScreen updateForm={updateForm} />
        {error && <Text style={{ marginLeft: 45 }}>{error}</Text>}
        <TouchableOpacity style={styles.submitButton} onPress={submitForm}>
          <Text testID='submit-button' style={{ fontSize: 24 }}>
            Submit
          </Text>
        </TouchableOpacity>
      </ScrollView>
      <CatchModal visible={modalVisible} setModalVisible={setModalVisible}/>
    </>
  );
}

AddCatch.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      lat: PropTypes.number.isRequired,
      lon: PropTypes.number.isRequired
    })
  })
};

useUserContext.propTypes = {
  userID: PropTypes.number.isRequired,
  setShowMarker: PropTypes.func.isRequired
};
