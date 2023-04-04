import { useNavigation } from "@react-navigation/native";
import { Image, Pressable, Text, View } from "react-native";
import { useBasketContext } from "../../context/BasketContext";

const OrderListItem = ({ order }) => {
  const navigation = useNavigation();
  const { totalPrice } = useBasketContext();
  const onPress = () => {
    navigation.navigate("Order", { id: order.id },)
  };

  return (
    <Pressable
      onPress={onPress}
      style={{ flexDirection: "row", margin: 10, alignItems: "center" }}
    >
      <Image
        source={{ uri: order.Restaurant.image }}
        style={{ width: 75, height: 75, marginRight: 5 }}
      />

      <View>
        <Text style={{ fontWeight: "600", fontSize: 16 }}>
          {order.Restaurant.name}
        </Text>
        <Text style={{ marginVertical: 5 }}>${totalPrice.toFixed(2)}</Text>
        <Text>{order.status} </Text>
      </View>
    </Pressable>
  );
};

export default OrderListItem