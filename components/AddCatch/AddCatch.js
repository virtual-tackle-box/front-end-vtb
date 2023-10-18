import { SafeAreaView, ScrollView } from 'react-native';
import { Header } from 'react-native-elements';
import CameraScreen from './UploadPhoto/UploadPhoto';
import AddFish from './AddFish/AddFish';
import { useState } from 'react';

export default function AddCatch() {
  const [formData, setFormData] = useState({
    spot: '',
    lat: 0.0,
    lon: 0.0,
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
      />
      <ScrollView style={{ height: '100%' }}>
        <AddFish updateForm={updateForm} />
        <CameraScreen updateForm={updateForm} />
      </ScrollView>
    </>
  );
}
