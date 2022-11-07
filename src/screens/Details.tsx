import React, {useEffect} from 'react';
import {Image, Text, View} from "react-native";
import {DetailsPropsType, useAppNavigation} from "./types";
import {useAppDispatch, useAppSelector} from "../Store/Store";
import {cleanCurrentPokemon, getCurrentPokemon} from "../Store/rootReducer";

export const Details = ({route}: DetailsPropsType) => {
    const navigation = useAppNavigation()
    const dispatch = useAppDispatch()
    const currentPokemon = useAppSelector(state => state.root.currentPokemon)
    console.log('props', route.params.url)

    useEffect(() => {
       dispatch(getCurrentPokemon(route.params.url))
       return () => {
        dispatch(cleanCurrentPokemon())
       }
    }, [])

    if (currentPokemon && !Object.keys(currentPokemon).length) {
        return <View>
            <Text>LOADING...</Text>
        </View>
    }

    return (
        <View>
            <Text>Details</Text>
            <Text>{currentPokemon && currentPokemon.name}</Text>
            {
                currentPokemon && <Image
                    style={{width: 200, height: 200}}
                    source={{uri: currentPokemon.sprites.other['official-artwork'].front_default}}/>
            }
        </View>
    );
};

