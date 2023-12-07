import { NativeAppEventEmitter, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

// Component imports
import LoginPage from './pages/login';
import HomePage from './pages/home';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginPage} options={{headerShown: false}} />
        <Stack.Screen name="Home" component={HomePage} options={{ title: 'Main Page', animationEnabled: false, }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
