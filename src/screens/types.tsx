import {NavigationProp, useNavigation} from "@react-navigation/native";
import {NativeStackScreenProps} from "@react-navigation/native-stack";

export type RootStackParamList = {
    Home: undefined
    Details: { url: string } //прокидываем в объект
}

export type DetailsPropsType = NativeStackScreenProps<RootStackParamList, 'Details'> //мы передаем ему тип объект, в первый параметр, а во второй параметр мы передаем то поле, которое нам нунжно.

export  type NavigationUseType = NavigationProp<RootStackParamList>

export const useAppNavigation = () => useNavigation<NavigationUseType>()