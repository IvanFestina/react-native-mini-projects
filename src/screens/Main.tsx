import React from 'react';
import {View, Text} from "react-native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {HomeScreen} from "./HomeScreen";
import {RootStackParamList} from "./types";

const Main = () => {
const Stack = createNativeStackNavigator<RootStackParamList>();



    return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    );
};

export default Main;