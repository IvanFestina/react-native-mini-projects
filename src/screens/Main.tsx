import React from 'react';
import {View, Text} from "react-native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {HomeScreen} from "./HomeScreen";
import {RootStackParamList} from "./types";
import {Details} from "./Details";

const Main = () => {
const Stack = createNativeStackNavigator<RootStackParamList>();



    return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    );
};

export default Main;