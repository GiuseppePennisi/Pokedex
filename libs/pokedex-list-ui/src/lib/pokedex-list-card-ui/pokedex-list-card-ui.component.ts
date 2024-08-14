import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { PokedexListCardViewModel } from '@pokedex/pokedex-list-data-access';

@Component({
    selector: 'pkmn-pokedex-list-card-ui',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './pokedex-list-card-ui.component.html',
    styleUrl: './pokedex-list-card-ui.component.scss',
})
export class PokedexListCardUiComponent {
    pokedexListCardVM = input.required<
        PokedexListCardViewModel | null | undefined
    >();
}
