import axios from "axios";

const BASE_URL = 'https://poketapi.co/api/v2/'

const instance = axios.create({
    baseURL: BASE_URL
})

export const api = {
    getAll() {
        return instance.get<{results: Array<PokemonItem>}>('pokemon')
    }
}

export type PokemonItem = {
    name: string
    url: string
}

export type Pokemon = {
    id: number
    name: string
    sprites: {
        other: {
            'official-artwork': {
                'front_default': string
            }
        }
    }
}