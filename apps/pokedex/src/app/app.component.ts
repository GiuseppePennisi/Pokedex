import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PokeballLoaderUiComponent } from '@pokedex/pokeball-loader-ui';

@Component({
    standalone: true,
    imports: [PokeballLoaderUiComponent, RouterModule],
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
    title = 'pokedex';
}

//TODO https://dev.to/ngrx/using-ngrx-packages-with-standalone-angular-features-53d8
//TODO https://blog.mihaioltean.com/how-to-use-ngrx-and-standalone-components
