import { Text, TextInput, View } from 'react-native';

import { AddFishStylesheet as styles } from './AddFishStylesheet';

export default function AddFish({ formData, updateForm }) {
  return (
    <View style={styles.container}>
      <Text testID='fish-header' style={styles.formHeader}>
        Fish Details
      </Text>

      {/* SPECIES INPUT */}
      <Text testID='species-input-header'>Species</Text>
      <TextInput
        testID='species-input'
        label='Species'
        placeholder='i.e. Largemouth Bass'
        style={styles.input}
        value={formData.species}
        onChangeText={text => updateForm('species', text)}
      />

      {/* WEIGHT INPUT */}
      <Text testID='weight-input-header'>Weight</Text>
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
      <Text testID='length-input-header'>Length</Text>
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
