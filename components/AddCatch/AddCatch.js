import { ScrollView, Text, TouchableOpacity } from 'react-native';
import { Header } from 'react-native-elements';
import { useState } from 'react';

import CameraScreen from './UploadPhoto/UploadPhoto';
import AddFish from './AddFish/AddFish';
import AddLure from './LureForm/LureForm';

import { AddCatchStylesheet as styles } from './AddCatchStylesheet';

// check in with Banjo about passing lat and lon in
export default function AddCatch({ lat, lon }) {
  const [formData, setFormData] = useState({
    spot: '',
    lat,
    lon,
    species: '',
    weight: 0.0,
    length: 0.0,
    lure: '',
    url: ''
  });

  function updateForm(name, value) {
    setFormData(prev => {
      return {
        ...prev,
        [name]: value
      };
    });
  }

  return (
    <>
      <Header
        leftComponent={{ text: 'Cancel' }} // needs event handler
        centerComponent={{ text: 'ADD CATCH', style: { fontSize: 25 } }}
        backgroundColor='#F0EAD6'
      />
      <ScrollView style={{ height: '100%', backgroundColor: '#F0EAD6' }}>
        <AddFish formData={formData} updateForm={updateForm} />
        <CameraScreen updateForm={updateForm} />
        <AddLure updateForm={updateForm} lure={formData.lure} />
        <TouchableOpacity style={styles.submitButton}>
          <Text style={{ fontSize: 24 }}>Submit</Text>
        </TouchableOpacity>
      </ScrollView>
    </>
  );
}
