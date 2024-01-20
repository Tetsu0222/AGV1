import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PokemonZukan }from '../pokedex'
import { ActivatedRoute } from '@angular/router';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'pokemon-detail',
  standalone: true,
  imports: [CommonModule, RouterOutlet,MatCardModule],
  templateUrl: './pokemon-detail.component.html',
  styleUrl: './pokemon-detail.component.css'
})
export class PokemonDetail implements OnInit{

  pokemons = PokemonZukan
  pokemon : any;
  myParam : any;

  constructor(private route :ActivatedRoute){
    
  }

  ngOnInit():void{
      this.route.params.subscribe( param => {
        this.route.params.subscribe((params) => (this.myParam = +params['id']));
        this.pokemon = this.pokemons[ this.myParam ];
      })
  }
  
}
