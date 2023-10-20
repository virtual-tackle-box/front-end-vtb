import {
  Text,
  View,
  ScrollView,
  SafeAreaView,
  TouchableOpacity
} from 'react-native';
import { Header } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

export default function CatchLog() {
  const navigation = useNavigation();

  function navToBooks() {
    navigation.navigate('BooksDashboard');
  }

  return (
    <SafeAreaView>
      <Header
        leftComponent={
          <TouchableOpacity onPress={navToBooks}>
            <Text>Go Back</Text>
          </TouchableOpacity>
        }
        centerComponent={{ text: 'Catch Log', style: { fontSize: 25 } }}
        backgroundColor='#F0EAD6'
      />
      <ScrollView style={{ height: '100%', backgroundColor: '#F0EAD6' }}>
        <View>
          <Text>Catch Log</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
