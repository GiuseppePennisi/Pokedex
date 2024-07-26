import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokedexListFeatureComponent } from './pokedex-list-feature.component';

describe('PokedexListFeatureComponent', () => {
    let component: PokedexListFeatureComponent;
    let fixture: ComponentFixture<PokedexListFeatureComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [PokedexListFeatureComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(PokedexListFeatureComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
