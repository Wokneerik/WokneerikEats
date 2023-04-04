import { useNavigation } from '@react-navigation/native';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

const RestaurantItem = ({restaurants}) => {
  const navigation = useNavigation()

  const onPress = () => {
    navigation.navigate("Restaurant", { id: restaurants.id });
  }
  return (
    <Pressable onPress={onPress} style={styles.restaurantContainer}>
    <Image source={{
        uri: restaurants.image
      }} 
           style={styles.image} 
           />
  <View style={styles.row}>
     <View>
      <Text style={styles.title}>{restaurants.name}</Text>
      <Text style={styles.subtitle}>${restaurants.deliveryFee.toFixed(1)} &#8226; {restaurants.minDeliveryTime}-{restaurants.maxDeliveryTime} minutes</Text>
    </View>

    <View style={styles.rating}>
      <Text>{restaurants.rating.toFixed(1)}</Text>
    </View>

    </View>
  </Pressable>
  )
}

const styles = StyleSheet.create({
  restaurantContainer: {
    width: '100%',
    marginVertical: 10,
  },
  image: {
    width: '100%',
    aspectRatio: 5/3,
    marginBottom: 5,
    borderRadius: 10
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    marginVertical: 5
  },
  subtitle: {
    color: "grey",
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    marginLeft: 'auto',
    backgroundColor: 'lightgrey',
    padding: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
  }
});

export default RestaurantItem