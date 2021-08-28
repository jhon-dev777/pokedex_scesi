import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogPokemonDetailComponent } from './dialog-pokemon-detail.component';

describe('DialogPokemonDetailComponent', () => {
  let component: DialogPokemonDetailComponent;
  let fixture: ComponentFixture<DialogPokemonDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogPokemonDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogPokemonDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
