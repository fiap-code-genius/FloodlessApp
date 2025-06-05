import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import ShelterListScreen from '../screens/ShelterListScreen';
import AlertScreen from '../screens/AlertScreen';
import VolunteerScreen from '../screens/VolunteerScreen';
import HelpScreen from '../screens/HelpScreen';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}  />
        <Stack.Screen name="Abrigos" component={ShelterListScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Alertas" component={AlertScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Voluntários" component={VolunteerScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Ajuda" component={HelpScreen} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
