Projeto react-native na máquina
cd\ -> voltar raiz
mkdir workspace
cd workspace

código para criar projeto react-native:
npx create-expo-app --template blank meu-app
y
---------------------------------------------------------------------
executar o app
npx expo start
---------------------------------------------------------------------
Exemplo simples de navegação de tela
// In App.js in a new project

import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button title='Perfil' onPress={() => navigation.navigate('Perfil')}/>
      <Button title='Configuração' onPress={() => navigation.navigate('Config')}/>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Página de perfil</Text>
    </View>
  );
}

function ConfigScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Tela de Configuração</Text>
    </View>
  );
}

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
