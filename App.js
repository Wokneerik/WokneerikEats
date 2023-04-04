import { NavigationContainer } from '@react-navigation/native';
import { Amplify } from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react-native';
import { StatusBar } from 'expo-status-bar';
import config from './src/aws-exports';
import AuthContextProvider from './src/context/AuthContext';
import BasketContextProvider from './src/context/BasketContext';
import OrderContextProvider from './src/context/OrderContext';
import RootNavigator from './src/navigation';
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();



Amplify.configure({...config, Analytics: {disabled: true}})

function App() {
  return (
 <NavigationContainer>
  <AuthContextProvider>
    <BasketContextProvider>
     <OrderContextProvider>
       <RootNavigator />
      </OrderContextProvider>
    </BasketContextProvider>
   </AuthContextProvider>
  <StatusBar style="auto" />
</NavigationContainer>
  );
}

export default withAuthenticator(App)