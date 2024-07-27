import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PokedexLoaderUiComponent } from '@pokedex/pokeball-loader-ui';
import { PokedexLoaderFacade } from '@pokedex/pokedex-loader-data-access';

@Component({
    standalone: true,
    imports: [CommonModule, RouterModule, PokedexLoaderUiComponent],
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
    title = 'pokedex';
    public pokedexLoaderFacade = inject(PokedexLoaderFacade);
}

//TODO https://dev.to/ngrx/using-ngrx-packages-with-standalone-angular-features-53d8
//TODO https://blog.mihaioltean.com/how-to-use-ngrx-and-standalone-components
