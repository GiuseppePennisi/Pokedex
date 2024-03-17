import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'pkmn-pokeball-loader-ui',
    standalone: true,
    imports: [CommonModule],
    styleUrls: ['./pokeball-loader-ui.components.scss'],
    template: ` <div class="wrapper">
        <div class="pokeball"></div>
    </div>`,
})
export class PokeballLoaderUiComponent {}
