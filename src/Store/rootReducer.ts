import {createAction, createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {api, Pokemon, PokemonItem} from "../Api/Api";

export const getAllPokemon = createAsyncThunk<Array<PokemonItem> | undefined, void>('root/getAllPokemon',
    async (_, apiThunk) => {
        try {
            const res = await api.getAll()
            return res.data.results
        } catch (e) {
            console.log('e', e)
        }
    })

export const getCurrentPokemon = createAsyncThunk<Pokemon | undefined, string>(
    'root/getCurrentPokemon',
    async (params) => {
        try {
            const res = await api.getPokemonById(params)
            return res.data
        } catch (e) {
            console.log('e', e)
        }
    }
)

export const cleanCurrentPokemon = createAction('root/cleanCurrentPokemon')

const rootSlice = createSlice({
    name: 'root',
    initialState: {
        allPokemon: [] as Array<PokemonItem>,
        currentPokemon: {} as Pokemon
    },
    reducers: {},
    extraReducers: (builder => {
        builder.addCase(getAllPokemon.fulfilled, (state, action) => {
            state.allPokemon = action.payload ? action.payload : []
        })
            .addCase(getCurrentPokemon.fulfilled, (state, action) => {
                state.currentPokemon = action.payload ? action.payload : {} as Pokemon
            })
            .addCase(cleanCurrentPokemon, (state, action) => {
                state.currentPokemon = {} as Pokemon
            })
    })
})

export const root = rootSlice.reducer