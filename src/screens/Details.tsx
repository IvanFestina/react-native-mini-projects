import React, {useEffect, useState} from 'react';
import {View, Text, Image} from "react-native";
import {PokemonProps} from "./types";
import {api, Pokemon} from "../Api/Api";

export const Details = ({route}: PokemonProps) => {
    const [data, setData] = useState<Pokemon>({} as Pokemon)
    useEffect(() => {
        api.getPokemonById(route.params.url)
            .then(res => {
                setData(res.data)
            })
        return () => {
            console.log('clear')
            setData({}as Pokemon)
        }
    }, [])
    if (!Object.keys(data).length) {
        return <View>
            <Text>LOADING...</Text>
        </View>
    }
    return (
        <View>
            <Text>Details</Text>
            <Text>{data && data.name}</Text>
            {
                data && <Image
                    style={{width: 200, height: 200}}
                    source={{uri: data.sprites.other['official-artwork'].front_default}}/>
            }
        </View>
    );
};

