// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PickupProvider } from './context/PickupContext';
import LoginScreen from './screens/LoginScreen';
import OtpScreen from './screens/OtpScreen';
import DashboardScreen from './screens/DashboardScreen';
import SchedulePickupScreen from './screens/SchedulePickupScreen';
import OrderHistoryScreen from './screens/OrderHistoryScreen';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PickupProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="OTP" component={OtpScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="SchedulePickup" component={SchedulePickupScreen} />
        <Stack.Screen name="OrderHistory" component={OrderHistoryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </PickupProvider>
  );
}




