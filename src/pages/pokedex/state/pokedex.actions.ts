import { Action } from '@ngrx/store';

import { Pokemon } from '../../../models/pokemon';

export enum PokedexActionTypes {
    QUERY = '[Pokedex] Query',

    ADD = '[Pokedex] Add',
}

export class Query implements Action {
    readonly type = PokedexActionTypes.QUERY;
}

export class Add implements Action {
    readonly type = PokedexActionTypes.ADD;
    
    constructor(public payload: {pokemons: Pokemon[]}) {}
}

export type PokedexActions
    =
    | Query
    | Add;

