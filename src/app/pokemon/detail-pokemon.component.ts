import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { Pokemon } from "./pokemon";
import { PokemonService } from "./pokemon.service";

@Component({
    selector: 'detail-pokemon',
    templateUrl: './detail-pokemon.component.html'
})
export class DetailPokemonComponent implements OnInit, OnDestroy {
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private _pokemonService: PokemonService) { }

    pokemon: Pokemon;
    private routeSub: Subscription;

    ngOnInit() {
        this.routeSub = this.route.params.subscribe(params => {
            let id = params['id']; // URL
            // for (let i = 0; i < this.pokemons.length; i++) {
            //    if (this.pokemons[i].id == id) {
            //     this.pokemon =this.pokemons[i];
            //    }   
            // }
            this._pokemonService.getPokemon(id).subscribe(data => {
                this.pokemon = data;
            });
        });
    }

    goBack() {
        this.router.navigate(['/pokemon/all']);
    }

    goEdit(pokemon: Pokemon) {
        let link = ['pokemon/edit', pokemon.id];
        this.router.navigate(link)
    }
    goDelete(pokemonid: number) {
        this._pokemonService.deletePokemon(pokemonid).subscribe(() => {
            this.goBack();

        })
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}