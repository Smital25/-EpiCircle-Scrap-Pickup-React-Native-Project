import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PartnerPickupProvider } from './context/PartnerPickupContext';

import LoginScreen from './screens/LoginScreen';
import OtpScreen from './screens/OtpScreen';
import DashboardScreen from './screens/DashboardScreen';
import PickupDetailScreen from './screens/PickupDetailScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PartnerPickupProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="OTP" component={OtpScreen} />
          <Stack.Screen name="Dashboard" component={DashboardScreen} />
          <Stack.Screen name="PickupDetail" component={PickupDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PartnerPickupProvider>
  );
}
