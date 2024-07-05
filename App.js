// In App.js in a new project

import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './components/pages/HomeScreen';
import ProfileScreen from './components/pages/ProfileScreen';
import ConfigScreen from './components/pages/ConfigScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName=''>
        <Stack.Screen 
          name="Inicio" 
          component={HomeScreen} 
          options={{ title: 'Início' }}
        />
        <Stack.Screen 
          name="Perfil" 
          component={ProfileScreen}
          options={{ title: 'Perfil' }} 
        />
        <Stack.Screen 
          name="Config" 
          component={ConfigScreen}
          options={{ title: 'Configuração' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;