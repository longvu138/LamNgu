/** @format */

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import Login from "../screens/Login";
import Register from "../screens/Register";
import JobDetail from "../screens/JobDetail";
import JobList from "../screens/Job-list";
import AddJob from "../screens/AddJob";
const Stack = createStackNavigator();

function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="JobList" component={JobList} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
       
        <Stack.Screen name="JobDetail" component={JobDetail} />
        <Stack.Screen name="AddJob" component={AddJob} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default RootNavigation;
