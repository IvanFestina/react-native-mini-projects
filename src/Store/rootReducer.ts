import {createAction, createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {api, Pokemon, PokemonItem} from "../Api/Api";

export const getAllPokemon = createAsyncThunk<Array<PokemonItem>, void>('root/getAllPokemon',
    async (_, {rejectWithValue}) => {
        try {
            const res = await api.getAllPokemon()
            return res.data.results
        } catch (e) {
            console.log('getAllPokemon', e)
            return rejectWithValue(e)
        }
    })

export const getCurrentPokemon = createAsyncThunk<Pokemon, string>(
    'root/getCurrentPokemon',
    async (params, {rejectWithValue}) => {
        try {
            const res = await api.getPokemonById(params)
            return res.data
        } catch (e) {
            return rejectWithValue(e)

        }
    }
)

export const cleanCurrentPokemon = createAction('root/cleanCurrentPokemon')

const rootSlice = createSlice({
    name: 'root',
    initialState: {
        allPokemon: [] as Array<PokemonItem>,
        currentPokemon: null as Pokemon | null
    },
    reducers: {},
    extraReducers: (builder => {
        builder.addCase(getAllPokemon.fulfilled, (state, action) => {
            state.allPokemon = action.payload
        })
            .addCase(getCurrentPokemon.fulfilled, (state, action) => {
                state.currentPokemon = action.payload
            })
            .addCase(cleanCurrentPokemon, (state, action) => {
                state.currentPokemon = {} as Pokemon
            })
    })
})

export const root = rootSlice.reducer