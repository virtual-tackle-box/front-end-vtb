import {
  Text,
  View,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Image
} from 'react-native';
import { Header } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { deleteCatch, getCatches } from '../../../fetchCalls';
import { useUserContext } from '../../UserContext/UserContext';

import PropTypes from 'prop-types';

import { CatchLogStylesheet as styles } from './CatchLogStylesheet';

export default function CatchLog() {
  const { userID, catches, setCatches } = useUserContext();

  const navigation = useNavigation();

  function navToBooks() {
    navigation.navigate('book');
  }

  async function fetchCatches() {
    const catches = await getCatches(userID);
    setCatches(catches.data);
  }

  async function delCatch(id) {
    await deleteCatch(userID, id);
    fetchCatches();
  }

  useEffect(() => {
    fetchCatches();
  }, []);

  const catchCards = catches.map(c => {
    const { id } = c;
    const { species, weight, length, spot_name, lure, cloudinary_urls } =
      c.attributes;
      
    const image = cloudinary_urls.length === 0 ? null : (
      <View>
        <Image
          source={{ uri: cloudinary_urls?.[0] }}
          style={styles.image}
        ></Image>
      </View>
    );

    return (
      <View style={styles.catchCard} key={id} testID={`${id}`}>
        <TouchableOpacity
          style={styles.delBtnContainer}
          onPress={() => delCatch(id)}
        >
          <Text style={styles.delBtn}>X</Text>
        </TouchableOpacity>
        {cloudinary_urls && image}
        <View>
          <Text>Species: {species}</Text>
          <Text>Weight: {weight}</Text>
          <Text>Length: {length}</Text>
        </View>
        <View>
          <Text>Fishing Spot: {spot_name}</Text>
        </View>
        <View>
          <Text>Lure: {lure || 'unspecified'}</Text>
        </View>
      </View>
    );
  });

  return (
    <SafeAreaView style={{ backgroundColor: '#F0EAD6' }}>
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
        <View style={styles.catchCardContainer}>{catches && catchCards}</View>
      </ScrollView>
    </SafeAreaView>
  );
}

useUserContext.propTypes = {
  userID: PropTypes.string.isRequired,
  catches: PropTypes.arrayOf(PropTypes.object).isRequired,
  setCatches: PropTypes.func.isRequired
};
