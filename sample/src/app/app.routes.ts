import { Routes } from '@angular/router';
import{ PokemonList } from './pokemon-list/pokemon-list.component'
import{ PokemonDetail } from './pokemon-detail/pokemon-detail.component'

//ここでURL指定して、どのページを開くか分岐する。
export const routes: Routes = [
    {
        path:'', 
        pathMatch:'full',
        component:PokemonList
    },
    {
        path:':id', 
        component:PokemonDetail
    }
];
