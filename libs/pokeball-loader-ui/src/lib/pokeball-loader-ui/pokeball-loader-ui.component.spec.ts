import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokeballLoaderUiComponent } from './pokeball-loader-ui.component';

describe('PokeballLoaderUiComponent', () => {
    let component: PokeballLoaderUiComponent;
    let fixture: ComponentFixture<PokeballLoaderUiComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [PokeballLoaderUiComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(PokeballLoaderUiComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
