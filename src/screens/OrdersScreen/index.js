import React from 'react';
import { FlatList, View } from 'react-native';
import OrderListItem from '../../components/OrderListItems';
import { useOrderContext } from '../../context/OrderContext';

const OrderScreen = () => {
  const { orders } = useOrderContext()

  return (
    <View style={{ flex: 1, width: "100%" }}>
      <FlatList
        data={orders}
        renderItem={({ item }) => <OrderListItem order={item} />}
      />
    </View>
  );
};

export default OrderScreen;