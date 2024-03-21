import { Pipe, PipeTransform } from '@angular/core';
import {interval, map, Observable, take} from "rxjs";

@Pipe({
  name: 'counter',
  standalone: true
})
export class CounterPipe implements PipeTransform {

    transform(value: number): Observable<number> {
        return interval(3000 / value).pipe(
            take(value),
            map(i => i + 1)
        );
    }

}
