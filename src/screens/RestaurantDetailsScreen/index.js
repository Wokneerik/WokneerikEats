import { DataStore } from '@aws-amplify/datastore';
import '@azure/core-asynciterator-polyfill';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Pressable, Text, View } from 'react-native';
import DishListItem from "../../components/DishListItem";
import { useBasketContext } from '../../context/BasketContext';
import { Dish, Restaurant } from '../../models';
import Header from "./Header";
import styles from './styles';

const RestaurantDetailsPage = () => {

  const [restaurant, setRestaurant] = useState([])
  const [dishes, setDishes] = useState([])
  
  const route = useRoute()
  const navigation = useNavigation()
  const id = route.params?.id

  const {setRestaurant: setBasketRestaurant, basket, basketDishes} = useBasketContext()

  
  useEffect(() => {
    if (!id) {
      return
    } 
    setBasketRestaurant(null)

    DataStore.query(Restaurant, id).then(setRestaurant);

    DataStore.query(Dish, (dish) => dish.restaurantID("eq", id)).then(setDishes)
  }, [id])

  useEffect(() => {
    setBasketRestaurant(restaurant)
  }, [restaurant])

  if(!restaurant){
    return <ActivityIndicator size={"large"} />
  }
  
  return (
    <View style={styles.page}>
      <FlatList
       ListHeaderComponent={() => <Header restaurant={restaurant} />}
        data={dishes}
        renderItem={({item}) => <DishListItem dish={item} />}
        keyExtractor={(item) => item.name}
       />
       <Ionicons 
       onPress={() => navigation.goBack()}
       name="arrow-back-circle" 
       size={45} 
       color="white" 
       style={styles.iconContainer} />
       {basket && 
         <Pressable onPress={() => navigation.navigate("Basket")} style={styles.button}>
        <Text style={styles.buttonText}>Open Basket ({basketDishes.length})</Text>
      </Pressable>
    }
    </View>
  )
}
  

export default RestaurantDetailsPage