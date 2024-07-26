import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
    selector: 'pkmn-pokedex-loader-ui',
    standalone: true,
    imports: [CommonModule],
    styleUrls: ['./pokedex-loader-ui.components.scss'],
    templateUrl: './pokedex-loader-ui.component.html',
})
export class PokedexLoaderUiComponent {
    /*  Introdotto con la versione 17 di Angular.
        Poiché il signal non è writable, non possiamo settare il valore del signal, ma solo accettare il valore del signal dal'elemento padre.
        https://angular.io/api/core/InputSignal
    */
    isLoading = input.required<boolean>();
}
