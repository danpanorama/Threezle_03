import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen  from './screens/SplashScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';
import { View } from 'react-native-web';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
   
    <View>
      
    </View>
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
    //     <Stack.Screen name="Splash" component={SplashScreen} />
    //     <Stack.Screen name="Welcome" component={WelcomeScreen} />
    //     <Stack.Screen name="Register" component={RegisterScreen} />
    //     <Stack.Screen name="Home" component={HomeScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
}
