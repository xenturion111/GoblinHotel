import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../screen/home';
import OnBoard from '../../screen/onBoard';
import DetailScreen from '../../screen/details';
import {StyleSheet} from 'react-native';
const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}} >
                <Stack.Screen name='OnBoard' component={OnBoard} />
                <Stack.Screen name='HomeScreen' component={HomeScreen} />
                <Stack.Screen name='DetailScreen' component={DetailScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;