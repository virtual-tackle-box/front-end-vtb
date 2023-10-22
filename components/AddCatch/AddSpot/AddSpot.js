import { Text, TextInput, View } from 'react-native';

import { AddSpotStylesheet as styles } from './AddSpotStylesheet';

import PropTypes from 'prop-types';

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
        onChangeText={text => updateForm('spot_name', text)}
      />
    </View>
  );
}

AddSpot.propTypes = {
  spot: PropTypes.string.isRequired,
  updateForm: PropTypes.func.isRequired
};
