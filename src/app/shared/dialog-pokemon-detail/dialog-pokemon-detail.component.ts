import { Component, Inject, Input, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-pokemon-detail',
  templateUrl: './dialog-pokemon-detail.component.html',
  styleUrls: ['./dialog-pokemon-detail.component.sass']
})
export class DialogPokemonDetailComponent implements OnInit {
  pokemon: any;
  constructor(public dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(): void {
    this.pokemon = this.data.pokemon;
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogPokemonDetailComponent);
    console.log(this.data)
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
