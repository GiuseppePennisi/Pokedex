import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    { path: '', redirectTo: '/pokedex', pathMatch: 'full' },
    {
        path: 'pokedex',
        loadComponent: () =>
            import('@pokedex/pokedex-list-feature').then(
                (c) => c.PokedexListFeatureComponent
            ),
    },
    //TODO Aggiungere rotta per pagina non trovata
];
