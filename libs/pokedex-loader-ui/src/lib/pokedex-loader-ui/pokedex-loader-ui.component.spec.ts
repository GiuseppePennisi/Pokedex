import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokedexLoaderUiComponent } from './pokedex-loader-ui.component';

describe('PokeballLoaderUiComponent', () => {
    let component: PokedexLoaderUiComponent;
    let fixture: ComponentFixture<PokedexLoaderUiComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [PokedexLoaderUiComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(PokedexLoaderUiComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
