import { Text, TextInput, View } from 'react-native';
import { AddLureStylesheet as styles } from './LureFormStylesheet';

export default function AddLure({ updateForm, lure }) {
  return (
    <View style={styles.container}>
      <Text testID='lure-header' style={styles.formHeader}>Lure Details</Text>

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
