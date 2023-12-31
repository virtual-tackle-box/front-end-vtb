import { Text, TextInput, View } from 'react-native';
import { LureFormStylesheet as styles } from './LureFormStylesheet';

import PropTypes from 'prop-types';

export default function AddLure({ updateForm, lure }) {
  return (
    <View style={styles.container}>
      <Text testID='lure-header' style={styles.formHeader}>
        Lure Details
      </Text>

      {/* LURE INPUT */}
      <Text testID='lure-input-label'>Lure Used</Text>
      <TextInput
        testID='lure-input'
        label='Lure'
        placeholder='i.e. Topwater Popper'
        style={styles.input}
        value={lure}
        onChangeText={text => updateForm('lure', text)}
      />
    </View>
  );
}

AddLure.propTypes = {
  updateForm: PropTypes.func.isRequired,
  lure: PropTypes.string.isRequired
};
