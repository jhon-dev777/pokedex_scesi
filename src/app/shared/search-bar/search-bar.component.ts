import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PokedexApiService } from 'src/app/services/pokedex-api.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.sass']
})
export class SearchBarComponent implements OnInit {
  searchPokemon: FormGroup;

  constructor(
    private pokedexApiService :PokedexApiService,
    private formBuilder: FormBuilder
  ) { 
    this.searchPokemon = this.formBuilder.group({
      pokemon: [null, Validators.required]
    });
  }

  ngOnInit(): void {
  }
  async submit() {
      if(this.searchPokemon.valid) {
        ( this.pokedexApiService.getPokemon(this.searchPokemon.value?.pokemon)).subscribe((data: any) => {
          alert('gotcha')
        }, (error) => {
          alert('not a pokemon')
        })
      } else {
        alert('not a pokemon')
      }
  }
}
