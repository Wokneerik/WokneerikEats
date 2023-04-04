import { DataStore } from '@aws-amplify/datastore';
import '@azure/core-asynciterator-polyfill';
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import RestaurantItem from '../../../src/components/RestaurantItem';
import { Restaurant } from '../../models';


export default function HomeScreen() {


  const [restaurants, setRestaurants] = useState([])
 
  useEffect(() => {
    DataStore.query(Restaurant).then(setRestaurants)
  }, [])

  return (
    <View style={styles.page}>
    <FlatList 
        data={restaurants} 
        renderItem={({item}) => <RestaurantItem restaurants={item} /> } 
        showsVerticalScrollIndicator={false}
    />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    paddingHorizontal: 10
  }
});

