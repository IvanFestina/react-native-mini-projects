import React, {useEffect, useState} from 'react';
import {View, Text, Image} from "react-native";
import {PokemonProps, useAppNavigation} from "./types";
import {api, Pokemon} from "../Api/Api";
import {useAppDispatch, useAppSelector} from "../Store/Store";
import {cleanCurrentPokemon, getCurrentPokemon} from "../Store/rootReducer";

export const Details = ({route}: PokemonProps) => {
    const navigation = useAppNavigation()
    const dispatch = useAppDispatch()
    const currentPokemon = useAppSelector(state => state.root.currentPokemon)

    useEffect(() => {
       dispatch(getCurrentPokemon(route.params.url))
       return () => {
        dispatch(cleanCurrentPokemon())
       }
    }, [])
    if (!Object.keys(currentPokemon).length) {
        return <View>
            <Text>LOADING...</Text>
        </View>
    }
    return (
        <View>
            <Text>Details</Text>
            <Text>{currentPokemon.name}</Text>
            {
                currentPokemon && <Image
                    style={{width: 200, height: 200}}
                    source={{uri: currentPokemon.sprites.other['official-artwork'].front_default}}/>
            }
        </View>
    );
};

