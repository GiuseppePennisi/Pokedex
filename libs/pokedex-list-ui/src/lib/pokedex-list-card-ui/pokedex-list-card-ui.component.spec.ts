import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokedexListCardUiComponent } from './pokedex-list-card-ui.component';

describe('PokedexListUiComponent', () => {
    let component: PokedexListCardUiComponent;
    let fixture: ComponentFixture<PokedexListCardUiComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [PokedexListCardUiComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(PokedexListCardUiComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
