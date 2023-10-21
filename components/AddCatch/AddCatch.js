import { ScrollView, Text, TouchableOpacity } from 'react-native';
import { Header } from 'react-native-elements';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import CameraScreen from './UploadPhoto/UploadPhoto';
import AddFish from './AddFish/AddFish';
import AddLure from './LureForm/LureForm';
import AddSpot from './AddSpot/AddSpot';

import { postNewCatch } from '../../fetchCalls';

import { AddCatchStylesheet as styles } from './AddCatchStylesheet';

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
    photo_url: ''
  });
  const [error, setError] = useState('');

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

    postNewCatch(undefined, formData)
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
        <AddSpot updateForm={updateForm} spot={formData.spot} />
        <AddFish formData={formData} updateForm={updateForm} />
        <AddLure updateForm={updateForm} lure={formData.lure} />
        <CameraScreen updateForm={updateForm} />
        {error && <Text style={{ marginLeft: 45 }}>{error}</Text>}
        <TouchableOpacity style={styles.submitButton} onPress={submitForm}>
          <Text testID='submit-button' style={{ fontSize: 24 }}>
            Submit
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </>
  );
}
