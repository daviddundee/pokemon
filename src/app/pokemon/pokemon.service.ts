import { HttpBackend, HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { POKEMONS } from "./mock-pokemon";
import { Pokemon } from "./pokemon";

@Injectable()
export class PokemonService {
    private pokemonsUrl = 'api/pokemons';
    constructor(private http: HttpClient) { }
    //retourne les pokemons
    getPokemons(): Observable<Pokemon[]> {
        return this.http.get<Pokemon[]>(this.pokemonsUrl);
    }

    //retroune le pokemon avec l'indetifiant
    getPokemon(id: number): Observable<Pokemon> {
        // api/pokemons/id
        // let pokemons = this.getPokemons();
        var url = this.pokemonsUrl + '/' + id;
        return this.http.get<Pokemon>(url);
    }
    getPokemonTypes(): Array<string> {
        return [
            'Plante', 'Feu', 'Eau', 'Insecte', 'Normal', 'Electrik',
            'Poison', 'Fée', 'Vol', 'Combat', 'Psy'
        ];
    }
    updatePokemon(pokemon: Pokemon): Observable<Pokemon> {
        const httpOptions = {
            headers: new HttpHeaders({ 'content-Type': 'application/json' })
        }
        return this.http.put<Pokemon>(this.pokemonsUrl, pokemon, httpOptions);
    }

    deletePokemon(pokemonid: number): Observable<Pokemon> {
        var url = `${this.pokemonsUrl}/${pokemonid}`;
        return this.http.delete<Pokemon>(url);
    }
    searchPokemons(term: string) : Observable<Pokemon[]> {
        if(!term.trim()) 
            return of([]);

        return this.http.get<Pokemon[]>(`api/pokemons/?name=${term}`)
    }
}
