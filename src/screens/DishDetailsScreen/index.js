import { DataStore } from '@aws-amplify/datastore'
import { AntDesign } from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Pressable, StyleSheet, Text, View } from 'react-native'
import { useBasketContext } from '../../context/BasketContext'
import { Dish } from '../../models'


const DishDetailsScreen = () => {
  const [dish, setDish] = useState(null)
 
  const [quantity, setQuantity] = useState(1)
  const navigation = useNavigation()
  const route = useRoute()
  const id = route.params?.id

  const {addDishToBasket} = useBasketContext()

  useEffect(() => {
    if (id) {
      DataStore.query(Dish, id).then(setDish);
    }
  }, [id]);

  useEffect(() => {
    if(id){
      DataStore.query(Dish, id).then(setDish)
    }
  }, [id])

  const onAddToBasket = async () => {
    await addDishToBasket(dish, quantity)
    navigation.goBack()
  }
  
  const onMinus = () => {
    if (quantity > 1) {
    setQuantity(quantity - 1)
    }
  }

  const onPlus = () => {
    setQuantity(quantity + 1)
  }

  const getTotal = () => {
    return (dish.price * quantity).toFixed(2)
  }

  if(!dish){
    return <ActivityIndicator size="large" color="gray" />
  }

  return (
    <View style={styles.page}>
      <Text style={styles.name}>{dish.name}</Text>
      <Text style={styles.description}>{dish.description}</Text>
      <View style={styles.separator} />

        <View style={styles.row}>
          <AntDesign name='minuscircleo' size={60} color="black" onPress={onMinus} />
          <Text style={styles.quantity}>{quantity}</Text>
          <AntDesign name='pluscircleo' size={60} color="black" onPress={onPlus} />
      </View>
      
      <Pressable onPress={onAddToBasket} style={styles.button}>
        <Text style={styles.buttonText}>Add {quantity} to basket</Text>
        <Text style={styles.buttonTotal}>${getTotal()}</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    width: "100%",
    padding: 10

  }, 
  description: {
    color: '#696969'
  },
  name: {
    fontSize: 30,
    fontWeight: "700",
    marginVertical: 10
  },
  separator: {
    height: 1,
    backgroundColor: 'lightgrey',
    marginVertical: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50
  },
  quantity: {
    fontSize: 25,
    fontWeight: "600",
    marginHorizontal: 20
  },
  button: {
    backgroundColor: "black",
    marginTop: "auto",
    marginBottom: 20,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "center"
  },
  buttonText: {
    color: "white",
    fontWeight: '600',
    fontSize: 18,
    alignSelf: "center"
  },
  buttonTotal: {
    color: "white",
    fontWeight: '300',
    fontSize: 18,
    position: 'absolute',
    right: 15,
  }
})

export default DishDetailsScreen