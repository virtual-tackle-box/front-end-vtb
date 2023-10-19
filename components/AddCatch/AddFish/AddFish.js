import { Text, TextInput, View } from 'react-native';

import { AddFishStylesheet as styles } from './AddFishStylesheet';

export default function AddFish({ updateForm, species, weight, length }) {
  return (
    <View style={styles.container}>
      <Text style={styles.formHeader}>Fish Details</Text>

      {/* SPECIES INPUT */}
      <Text>Species</Text>
      <TextInput
        label='Species'
        placeholder='i.e. Largemouth Bass'
        style={styles.input}
        value={species}
        onChangeText={text => updateForm('species', text)}
      />

      {/* WEIGHT INPUT */}
      <Text>Weight</Text>
      <TextInput
        keyboardType='numeric'
        label='Weight'
        placeholder='lb'
        style={styles.input}
        value={weight}
        onChangeText={text => updateForm('weight', text)}
      />

      {/* LENGTH INPUT */}
      <Text>Length</Text>
      <TextInput
        keyboardType='numeric'
        label='Length'
        placeholder='in'
        style={styles.input}
        value={length}
        onChangeText={text => updateForm('length', text)}
      />
    </View>
  );
}
