import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'


const DishListItem = ({dish}) => {
  const navigation = useNavigation()
  return (
    <Pressable onPress={() => navigation.navigate("Dish", {id: dish.id})} style={styles.container}>
    <View style={{flex: 1}}>
      <Text style={styles.name}>{dish.name}</Text>
      <Text style={styles.description} numberOfLines={2}>{dish.description}</Text>
      <Text style={styles.price}>${dish.price}</Text>
    </View>
    { dish.image && (<Image source={{uri: dish.image}} style={styles.image} />)}
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    marginHorizontal: 20,
    marginVertical: 10,
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1,
    flexDirection: 'row'
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
  description: {
    color: 'grey',
    marginVertical: 5
  },
  price: {
    fontSize: 16
  },
  image: {
    height: 80,
    aspectRatio: 1
  }
})

export default DishListItem