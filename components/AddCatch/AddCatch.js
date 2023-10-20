import { ScrollView, Text, TouchableOpacity } from 'react-native';
import { Header } from 'react-native-elements';
import { useEffect, useState } from 'react';

import CameraScreen from './UploadPhoto/UploadPhoto';
import AddFish from './AddFish/AddFish';
import AddLure from './LureForm/LureForm';

import { AddCatchStylesheet as styles } from './AddCatchStylesheet';
import AddSpot from './AddSpot/AddSpot';
import { useNavigation } from '@react-navigation/native';

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
    if (!formData.spot_name || !formData.species) {
      setError('Please fill out required form fields.');
    }

    const url =
      'https://083f9844-df93-46cf-bd2d-0d9386929d6d.mock.pstmn.io/api/v1/users/1/catches';

    const data = {
      catch: formData
    };

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };

    try {
      const response = await fetch(url, options);

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const responseData = await response.json();
    } catch (error) {
      setError(error);
      console.log('error: ', error);
    }
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
          // { text: 'Cancel' }
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
        <TouchableOpacity style={styles.submitButton} onPress={submitForm}>
          <Text testID='submit-button' style={{ fontSize: 24 }}>
            Submit
          </Text>
        </TouchableOpacity>
        {error && <Text>{error}</Text>}
      </ScrollView>
    </>
  );
}
