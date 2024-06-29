import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import HomeScreen from "../screens/HomeScreen";

const RootStack = createNativeStackNavigator();

export default function Root() {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <RootStack.Navigator>
                    <RootStack.Screen name="Home" component={HomeScreen} />
                </RootStack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );


}
