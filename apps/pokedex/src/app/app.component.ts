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
    //https://codepen.io/vinztt/pen/XjEyvZ
}
