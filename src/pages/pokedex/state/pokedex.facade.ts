import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { 
    PokedexActionTypes, 
    Query,
    Add,
 } from './pokedex.actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { PokemonProvider } from '../../../providers/pokemon/pokemon';
import { of } from 'rxjs/observable/of';
import { PokedexQuery, PokedexState } from './pokedex.reducer';
import { Store, select } from '@ngrx/store';

@Injectable()
export class PokedexFacade {

    pokemon$ = this.store.pipe(select(PokedexQuery.selectAll));

    @Effect()
    query$ = this.actions$.pipe(
        ofType<Query>(PokedexActionTypes.QUERY),
        switchMap((action) => {
            return this.svc.getPokemon();
        }),
        map(({next, pokemon}) => {
            console.log(pokemon);
            
            // return {type: PokedexActionTypes.ADD, payload: {pokemons: pokemon}};
            return new Add({pokemons: pokemon});
        }),
        catchError(error => of(error))
    );

    constructor(private actions$: Actions, private svc: PokemonProvider, private store: Store<PokedexState>) {};

}