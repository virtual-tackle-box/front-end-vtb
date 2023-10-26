import { Text, TextInput, View } from 'react-native';

import { AddFishStylesheet as styles } from './AddFishStylesheet';

import PropTypes from 'prop-types';

export default function AddFish({ formData, updateForm }) {
  return (
    <View style={styles.container}>
      <Text testID='fish-header' style={styles.formHeader}>
        Fish Details
      </Text>

      {/* SPECIES INPUT */}
      <Text testID='species-input-label'>Species*</Text>
      <TextInput
        testID='species-input'
        label='Species'
        placeholder='i.e. Largemouth Bass'
        style={styles.input}
        value={formData.species}
        onChangeText={text => updateForm('species', text)}
      />

      {/* WEIGHT INPUT */}
      <Text testID='weight-input-label'>Weight</Text>
      <TextInput
        testID='weight-input'
        keyboardType='numeric'
        label='Weight'
        placeholder='lb'
        style={styles.input}
        value={formData.weight}
        onChangeText={text => updateForm('weight', text)}
      />

      {/* LENGTH INPUT */}
      <Text testID='length-input-label'>Length</Text>
      <TextInput
        testID='length-input'
        keyboardType='numeric'
        label='Length'
        placeholder='in'
        style={styles.input}
        value={formData.length}
        onChangeText={text => updateForm('length', text)}
      />
    </View>
  );
}

AddFish.propTypes = {
  formData: PropTypes.shape({
    species: PropTypes.string.isRequired,
    weight: PropTypes.number,
    length: PropTypes.number
  }).isRequired,
  updateForm: PropTypes.func.isRequired
};
