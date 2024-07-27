import { Route } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';

import {
    POKEDEX_PAGE_STORE_KEY,
    pokedexListEffects,
    pokedexListPageReducer,
} from '@pokedex/pokedex-list-data-access';
import { PokedexListFeatureComponent } from '@pokedex/pokedex-list-feature';

export const appRoutes: Route[] = [
    { path: '', redirectTo: '/pokedex', pathMatch: 'full' },
    {
        path: 'pokedex',
        component: PokedexListFeatureComponent,
        // added here provider to lazy loading store
        providers: [
            provideState(POKEDEX_PAGE_STORE_KEY, pokedexListPageReducer),
            provideEffects([pokedexListEffects]),
        ],
    },
    //TODO Aggiungere rotta per pagina non trovata
];
