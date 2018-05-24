import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { 
    PokedexActionTypes, 
    Query,
 } from './pokedex.actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { PokemonProvider } from '../../../providers/pokemon/pokemon';
import { of } from 'rxjs/observable/of';

@Injectable()
export class PokedexFacade {

    @Effect()
    query$ = this.actions$.pipe(
        ofType<Query>(PokedexActionTypes.QUERY),
        switchMap((action) => {
            return this.svc.getPokemon();
        }),
        map(({next, pokemon}) => {
            console.log(pokemon);
            
            return {type: PokedexActionTypes.ADD, payload: {pokemons: pokemon}};
        }),
        catchError(error => of(error))
    );

    constructor(private actions$: Actions, private svc: PokemonProvider) {};

}