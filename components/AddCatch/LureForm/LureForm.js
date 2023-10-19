import { Text, TextInput, View } from 'react-native';
import { AddLureStylesheet as styles } from './LureFormStylesheet';

export default function AddLure({ updateForm, lure }) {
  return (
    <View style={styles.container}>
      <Text style={styles.formHeader}>Lure Details</Text>

      {/* LURE INPUT */}
      <Text>Lure Used</Text>
      <TextInput
        label='Species'
        placeholder='i.e. Topwater Popper'
        style={styles.input}
        value={lure}
        onChangeText={text => updateForm('lure', text)}
      />
    </View>
  );
}
