import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogPokemonDetailComponent } from 'src/app/shared/dialog-pokemon-detail/dialog-pokemon-detail.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  pokemon: any;
  constructor(public dialog: MatDialog, private route: Router) {}

  ngOnInit(): void {}

  getPokemon(event: any) {
    if(event) {
      this.pokemon = event;
      this.openDialog(this.pokemon)
    } else {
      alert('not a pokemon')
    }
  }
  openDialog(pokemon: any): void {
    const dialogRef = this.dialog.open(DialogPokemonDetailComponent, {
      width: '250px',
      data: {pokemon: pokemon}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result) this.route.navigate(['search'],{queryParams: {name: pokemon.name}})
    });
  }
}
