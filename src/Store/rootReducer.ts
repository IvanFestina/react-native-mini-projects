import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {api, PokemonItem} from "../Api/Api";

export const getAllPokemon = createAsyncThunk<Array<PokemonItem> | undefined, void>('root/getAllPokemon',
    async (_, apiThunk) => {
        try {
            const res = await api.getAll()
            return res.data.results
        } catch (e) {
            console.log('e', e)
        }
    })

const rootSlice = createSlice({
    name: 'root',
    initialState: {
        allPokemon: [] as Array<PokemonItem>
    },
    reducers: {},
    extraReducers: (builder => {
        builder.addCase(getAllPokemon.fulfilled, (state, action) => {
            state.allPokemon = action.payload ? action.payload : []
        })
    })
})

export const root = rootSlice.reducer