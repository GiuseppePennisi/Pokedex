import { Action } from '@ngrx/store';
import { catchError, Observable, startWith } from 'rxjs';

export const catchOperatorError =
    (errorAction: (error: string) => Action) =>
    <T>(source: Observable<T>) =>
        source.pipe(
            catchError((error, innerSource) =>
                innerSource.pipe(startWith(errorAction(error)))
            )
        );
