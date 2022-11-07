import {
    FlatList,
    ListRenderItem,
    Text,
    TouchableOpacity,
    View,
    StyleSheet
} from "react-native";
import React, {useEffect, useState} from "react";
import {api, PokemonItem} from "../Api/Api";
import {GAP, PADDING, WIDTH} from "../const";
import {useAppNavigation} from "./types";
import {useAppDispatch, useAppSelector} from "../Store/Store";
import {getAllPokemon} from "../Store/rootReducer";


export const HomeScreen = () => {
    const navigation = useAppNavigation()
    const dispatch = useAppDispatch()
    const allPokemon = useAppSelector(state => state.root.allPokemon)
    console.log(allPokemon)
    useEffect(() => {
        dispatch(getAllPokemon())
    }, [])

    const render: ListRenderItem<PokemonItem> = ({item}) => {
        return <TouchableOpacity
            onPress={() => navigation.navigate('Details', {url: item.url})}
            activeOpacity={0.7}
            style={styles.item}
            // style={{
            //     alignItems: "center",
            //     backgroundColor: '#ceb0b0',
            //     paddingHorizontal: 10,
            //     paddingVertical: 6,
            //     marginVertical: GAP,
            //     width: (WIDTH - (PADDING * 2)) / 2 - GAP,
            //     borderRadius: 5,
            //     borderWidth: 1,
            // }}
        >
            <Text style={{
                paddingHorizontal: 20
            }}
            >{item.name}</Text>
        </TouchableOpacity>
    }

    return (
        <View>
            <Text>Home Screen</Text>
            <FlatList
                data={allPokemon}
                numColumns={2}
                contentContainerStyle={{paddingHorizontal: PADDING}}
                columnWrapperStyle={{justifyContent: 'space-between'}}
                renderItem={render}
                keyExtractor={(item, index) => `${item.name} ${index}`}/>
            {/*<Text>{JSON.stringify(data, null, 2)}</Text>*/}
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        borderWidth: 1,
        borderRadius: 15,
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginVertical: 5,
    },
})
