import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'pkmn-pokeball-loader-ui',
    standalone: true,
    imports: [CommonModule],
    styleUrls: ['./pokeball-loader-ui.components.scss'],
    template: ` <div class="loader_background">
        <div class="pokeball_wrapper">
            <div class="pokeball"></div>
        </div>
    </div>`,
})
export class PokeballLoaderUiComponent {}
