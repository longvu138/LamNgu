import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import Login from '../screens/Login';
import Register from '../screens/Register';
import JobList from '../screens/Job-list'
const Stack = createStackNavigator();

function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register}/>
        <Stack.Screen name="JobList" component={JobList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default RootNavigation;
