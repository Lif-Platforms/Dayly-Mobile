import { NativeAppEventEmitter, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

// Component imports
import LoginPage from './pages/login';
import HomePage from './pages/home';
import Post from './pages/post';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Login" 
        screenOptions={{
          headerMode: 'screen', // Keep the header static during transitions
        }}
      >
        <Stack.Screen name="Login" component={LoginPage} options={{headerShown: false}} />
        <Stack.Screen name="Home" component={HomePage} options={{ title: 'Main Page', animationEnabled: false, }}/>
        <Stack.Screen name="Post" component={Post}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
