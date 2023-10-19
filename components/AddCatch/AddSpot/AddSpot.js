import { Text, TextInput, View } from 'react-native';

import { AddSpotStylesheet as styles } from './AddSpotStylesheet';

export default function AddSpot({ spot, updateForm }) {
  return (
    <View style={styles.container}>
      <Text style={styles.formHeader}>Fishing Spot</Text>

      {/* LURE INPUT */}
      <TextInput
        label='Fishing Spot'
        placeholder='i.e. Top Secret Spot #2'
        style={styles.input}
        value={spot}
        onChangeText={text => updateForm('spot', text)}
      />
    </View>
  );
}
