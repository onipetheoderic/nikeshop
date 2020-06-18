import React from 'react';
import {createAppContainer} from 'react-navigation';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/FontAwesome5';

import DescriptionScreen from './src/screens/DescriptionScreen';
import SplashScreen from './src/screens/SplashScreen';
import HomeScreen from './src/screens/HomeScreen';
import SelectedProductScreen from './src/screens/SelectedProductScreen';
const Tab = createMaterialBottomTabNavigator();
function HomeTabs() {
  return (
    <Tab.Navigator
  initialRouteName="Home"
  activeColor="#01a54f"
  inactiveColor="#D8DCDA"
  barStyle={{ backgroundColor: 'transparent' }}
>
      <Tab.Screen name="HomeScreen" component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen name="Feed" component={HomeScreen} 
       options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="soccer-field" color={color} size={26} />
        ),
      }}/>
      <Tab.Screen name="Message" component={HomeScreen}  options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="message-text-outline" color={color} size={26} />
        ),
      }}/>
      <Tab.Screen name="SelectedProductScreen" component={SelectedProductScreen}  
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="shoe-formal" color={color} size={26} />
        ),
      }}/>
       <Tab.Screen name="CartScreen" component={SelectedProductScreen}  
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="account" color={color} size={26} />
        ),
      }}/>
    </Tab.Navigator>

  );
}
function AppNavigator() {
  const Stack = createStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        
        headerBackImage: ({ color }) => (
          null
        ),
        headerStyle: {
          backgroundColor: 'white',
                borderTopWidth: 0,
                height: 0,
        },
        headerTitleStyle: {
          display:'none',
        },
      
      }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="DescriptionScreen" component={DescriptionScreen} />
        <Stack.Screen name="HomeScreen" component={HomeTabs} />
        <Stack.Screen name="SelectedProductScreen" component={SelectedProductScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
// const AppNavigator = createStackNavigator(
//   {
//     SplashScreen:SplashScreen,
//     DescriptionScreen:DescriptionScreen,
//     HomeScreen:HomeTabs,
//     SelectedProductScreen:SelectedProductScreen,
   
    
    
//   },{
//     headerMode: 'none',

//   },
//   {
//     headerStyle: {
//       backgroundColor: 'white',
//       borderTopWidth: 0,
//       height: 0,
//   },
//   }
  
// );
export default AppNavigator



