import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PokemonZukan } from '../pokedex'
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'pokemon-list',
  standalone: true,
  imports: [CommonModule, RouterOutlet,MatCardModule],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css'
})
export class PokemonList {
  pokemons = PokemonZukan
}
