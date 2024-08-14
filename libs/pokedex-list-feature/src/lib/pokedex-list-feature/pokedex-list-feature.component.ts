import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { PokemonListFacade } from '@pokedex/pokedex-list-data-access';
import { PokedexListCardUiComponent } from '@pokedex/pokedex-list-ui';

@Component({
    selector: 'pkmn-pokedex-list-feature',
    standalone: true,
    imports: [CommonModule, PokedexListCardUiComponent],
    templateUrl: './pokedex-list-feature.component.html',
    styleUrl: './pokedex-list-feature.component.css',
})
export class PokedexListFeatureComponent implements OnInit {
    protected pokedexListFacade = inject(PokemonListFacade);

    ngOnInit(): void {
        this.pokedexListFacade.getPokedexPage();
    }
}
