import { Text, TextInput, View } from 'react-native';

import { AddSpotStylesheet as styles } from './AddSpotStylesheet';

export default function AddSpot({ spot, updateForm }) {
  return (
    <View style={styles.container}>
      <Text testID='spot-header' style={styles.formHeader}>
        Fishing Spot
      </Text>

      {/* LURE INPUT */}
      <Text testID='spot-input-label'>Spot Name*</Text>
      <TextInput
        testID='spot-input'
        label='Fishing Spot'
        placeholder='i.e. Top Secret Spot #2'
        style={styles.input}
        value={spot}
        onChangeText={text => updateForm('spot', text)}
      />
    </View>
  );
}
