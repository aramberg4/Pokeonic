
// import { createFeatureSelector } from '@ngrx/store';

import { createEntityAdapter, EntityState } from '@ngrx/entity';

import { Pokemon } from '../../../models/pokemon';
import { PokedexActions, PokedexActionTypes } from './pokedex.actions';

 

export const GETTING = 'GETTING';
export const ADDED = 'ADDED';

export enum PokedexUiState {
    LOADING = "Loading",
    LOADED = "Loaded",
}

export interface PokedexState extends EntityState<Pokemon> {
    uiState: PokedexUiState;
}

const pokeAdapter = createEntityAdapter<Pokemon>();
const initialState: PokedexState = pokeAdapter.getInitialState({
    uiState: PokedexUiState.LOADED
});

export function pokedexReducer(
    state: PokedexState = initialState,
    action: PokedexActions,
): PokedexState {

    switch (action.type) {
        case PokedexActionTypes.QUERY:
            return { ...state, uiState: PokedexUiState.LOADING};
        
        case PokedexActionTypes.ADD:
            return pokeAdapter.addMany(action.payload.pokemons, {
                    ...state,
                    uiState: PokedexUiState.LOADED
            });
    }

    return state;
}


export namespace PokedexQuery {
    // const selectSlice = createFeatureSelector<PokedexUiState>('pokedex');
    
    export const {
        selectIds,
        selectEntities,
        selectAll,
        selectTotal
    } = pokeAdapter.getSelectors(); 
}