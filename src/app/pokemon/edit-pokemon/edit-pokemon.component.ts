import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Action } from 'rxjs/internal/scheduler/Action';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-edit-pokemon',
  templateUrl: './edit-pokemon.component.html',
  styleUrls: ['./edit-pokemon.component.scss']
})
export class EditPokemonComponent implements OnInit, OnDestroy {
  pokemon: Pokemon = null;
  routeSub: Subscription;
  
  constructor(private  route: ActivatedRoute, private _pokemonService: PokemonService) { }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      let id = params['id']; // URL
      this._pokemonService.getPokemon(id).subscribe(data => {
        this.pokemon = data;
      });
    });
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }
}
