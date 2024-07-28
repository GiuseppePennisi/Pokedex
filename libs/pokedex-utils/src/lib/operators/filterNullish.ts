import { OperatorFunction, pipe } from 'rxjs';
import { filter } from 'rxjs/operators';

/**
 * A utility function that creates an RxJS pipe operator to filter out `null` and `undefined` values from a stream.
 *
 * @template T - The type of the values being filtered.
 * @returns {import('rxjs').OperatorFunction<T | null | undefined, T>} - An RxJS pipe operator that filters out `null` and `undefined` values.
 *
 * @example
 * import { of } from 'rxjs';
 * import { filterNullish } from './filterNullish';
 *
 * const source$ = of(1, null, 2, undefined, 3);
 * const filtered$ = source$.pipe(filterNullish());
 *
 * filtered$.subscribe(value => console.log(value)); // Outputs: 1, 2, 3
 */
export function filterNullish<T>(): OperatorFunction<T | null | undefined, T> {
    return pipe(
        filter(
            (value: T | null | undefined): value is T =>
                value !== null && value !== undefined
        )
    );
}
