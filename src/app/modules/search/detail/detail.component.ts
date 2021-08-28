import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { PokedexApiService } from 'src/app/services/pokedex-api.service';
import { PokemonModel } from 'src/app/shared/models/pokemon.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.sass']
})
export class DetailComponent implements OnInit {
  pokemonName;
  pokemon: any;
  constructor(
    private router: Router,
    private pokedexApiService :PokedexApiService,
    private _snackBar: MatSnackBar
    ) { 
    this.pokemonName = this.router.getCurrentNavigation()?.extractedUrl.queryParams ;
  }

  ngOnInit(): void {
    this.detailPokemon()
  }

  async detailPokemon() {
    if(this.pokemonName?.name) {
      ( this.pokedexApiService.getPokemon(this.pokemonName.name)).subscribe((data: PokemonModel) => {
        this.pokemon = data;
      }, (error) => {
        this._snackBar.open('not a pokemon');
      })}
  }
  getPokemon(event: any) {
    if(event) {
      this.pokemon = event;
    }
  }

}
