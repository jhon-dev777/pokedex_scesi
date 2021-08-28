import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PokedexApiService } from 'src/app/services/pokedex-api.service';
import { PokemonModel } from '../models/pokemon.model';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.sass']
})
export class SearchBarComponent implements OnInit {
  searchPokemon: FormGroup;
  pokemon: any;
  constructor(
    private pokedexApiService :PokedexApiService,
    private formBuilder: FormBuilder
  ) { 
    this.searchPokemon = this.formBuilder.group({
      pokemon: [null, Validators.required]
    });
  }
  @Output() getPokemon: EventEmitter<any> = new EventEmitter();
  
  ngOnInit(): void {  
  }
  async submit() {
      if(this.searchPokemon.valid) {
        ( this.pokedexApiService.getPokemon(this.searchPokemon.value?.pokemon)).subscribe((data: PokemonModel) => {
          this.getPokemon.emit(data);
          this.pokemon = data;
        }, (error) => {
          this.getPokemon.emit(null);
        })
      } else {
        this.getPokemon.emit(null);
      }
    this.searchPokemon.reset();
  }
}
