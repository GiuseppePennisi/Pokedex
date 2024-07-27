import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokedexPage } from '../models';
@Injectable({
    providedIn: 'root',
})
export class PokeApiRestService {
    private baseUrl = 'https://pokeapi.co/api/v2';
    private httpClient = inject(HttpClient);

    /**
     * Retrieves a paginated list of Pokémon from the PokeAPI.
     *
     * @param limit - The number of Pokémon to return per page. If not provided, the API will use its default limit (20).
     * @param offset - The number of Pokémon to skip before starting to return results. If not provided, the API will start from the beginning.
     *
     * @returns An Observable that emits a {@link PokedexPage} containing the requested Pokémon and pagination information.
     */
    getPokedexPage(limit?: number, offset?: number): Observable<PokedexPage> {
        let params = new HttpParams();
        if (limit) {
            params = params.append('limit', limit.toString());
        }
        if (offset) {
            params = params.append('offset', offset.toString());
        }
        return this.httpClient.get<PokedexPage>(`${this.baseUrl}/pokemon`, {
            params,
        });
    }
}
