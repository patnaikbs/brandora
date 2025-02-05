import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Settings from "./components/Settings";
import Notification from "./components/Notification"
import { NavigationContainer } from "@react-navigation/native";



const Stack = createStackNavigator();

 export default function MyStack() {
    return (
       < NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Settings" component={Settings} />
            <Stack.Screen name="Notification" component={Notification} />
        </Stack.Navigator>
        </NavigationContainer>
    );
}