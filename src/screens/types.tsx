import {NavigationProp, useNavigation} from "@react-navigation/native";

export type RootStackParamList = {
    Home: undefined
}

export  type NavigationUseType = NavigationProp<RootStackParamList>

export const useAppNavigation = () => useNavigation()