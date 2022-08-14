import {Dimensions, FlatList, Text, TouchableOpacity, View} from "react-native";
import React, {useEffect, useState} from "react";
import {api, PokemonItem} from "../Api/Api";

const {width, height} = Dimensions.get('screen')
const WIDTH = width
const HEIGHT = height
const PADDING = 30
const GAP = 5

export const HomeScreen = () => {

    const [data, setData] = useState<Array<PokemonItem>>([])


    useEffect(() => {
        api.getAll().then((response) => {
            setData(response.data.results)
        })
    }, [])

    return (
        <View>
            <Text>Home Screen</Text>
            <FlatList
                data={data}
                numColumns={2}
                contentContainerStyle={{paddingHorizontal: PADDING}}
                columnWrapperStyle={{justifyContent: 'space-between'}}
                renderItem={({item}) => {
                    return <TouchableOpacity
                        activeOpacity={0.7}
                        style={{
                            backgroundColor: '#ceb0b0',
                            paddingHorizontal: 10,
                            paddingVertical: 6,
                            marginVertical: GAP,
                            width: (WIDTH - (PADDING * 2)) / 2 - GAP
                        }}
                    >
                        <Text style={{fontSize: 18, fontWeight: '500'}}>{item.name}</Text>
                    </TouchableOpacity>
                }} keyExtractor={(item, index) => `${item.name} ${index}`}/>
            {/*<Text>{JSON.stringify(data, null, 2)}</Text>*/}
        </View>
    );
}