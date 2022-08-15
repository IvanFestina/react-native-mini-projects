import axios from "axios";

const BASE_URL = 'https://poketapi.co/api/v2/'

const instance = axios.create({
    baseURL: BASE_URL
})

export const api = {
    getAll() {
        return instance.get<{results: Array<PokemonItem>}>('pokemon')
    },
    getPokemonById(url: string) {
        return instance.get<Pokemon>(url.replace(BASE_URL, ''))
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