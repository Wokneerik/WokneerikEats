import { FontAwesome5, Foundation } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useAuthContext } from '../context/AuthContext';
import BasketScreen from '../screens/BasketScreen';
import DishDetailsScreen from '../screens/DishDetailsScreen';
import HomeScreen from '../screens/HomeScreen';
import OrderDetails from "../screens/OrderDetails";
import OrderScreen from '../screens/OrdersScreen';
import Profile from '../screens/ProfileScreen';
import RestaurantDetailsScreen from '../screens/RestaurantDetailsScreen';

const Stack = createNativeStackNavigator()

const RootNavigator = () => {
  const {dbUser} = useAuthContext()
  return(
    <Stack.Navigator screenOptions={{headerShown: false}}>
    {dbUser ? (
      <Stack.Screen name="HomeTabs" component={HomeTabs} />
    ) : (
      <Stack.Screen name="Profile" component={Profile} />
    )}
      
      <Stack.Screen 
        name="Restaurant" 
        component={RestaurantDetailsScreen} 
        options={{headerShown: false }} 
        />
    </Stack.Navigator>
  )
}

const Tab = createMaterialBottomTabNavigator()

const HomeTabs = () => {
  return(
    <Tab.Navigator barStyle={{backgroundColor: "white", marginBottom: -20}} >
      <Tab.Screen 
      name="Home" 
      component={HomeStackNavigator} 
      options={{
        tabBarIcon: ({color}) => <Foundation name="home" size={24} color={color} /> 
        }} />
      <Tab.Screen 
      name="Orders" 
      component={OrderStackNavigator} 
      options={{
        tabBarIcon: ({color}) => <FontAwesome5 name="list-alt" size={24} color={color} />
        }} />
      <Tab.Screen 
      name="Profile"
       component={Profile} 
       options={{
        tabBarIcon: ({color}) => <FontAwesome5 name="user-alt" size={24} color={color} /> 
        }}
       />
    </Tab.Navigator>
  )
}

const HomeStack = createNativeStackNavigator()

const HomeStackNavigator = () => {
  return(
    <HomeStack.Navigator>
      <HomeStack.Screen name="Restaurants" component={HomeScreen}  />
      <HomeStack.Screen name="Restaurant" component={RestaurantDetailsScreen} options={{headerShown: false}} />
      <HomeStack.Screen name="Dish" component={DishDetailsScreen} />
      <HomeStack.Screen name="Basket" component={BasketScreen} />
    </HomeStack.Navigator>
  )
}

const OrderStack = createNativeStackNavigator()

const OrderStackNavigator = () => {
  return(
    <OrderStack.Navigator>
      <OrderStack.Screen name="Orders" component={OrderScreen} />
      <OrderStack.Screen name="Order" component={OrderDetails} />

    </OrderStack.Navigator>
  )
}

export default RootNavigator