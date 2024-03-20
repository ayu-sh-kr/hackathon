import { Pipe, PipeTransform } from '@angular/core';
import {interval, map, take} from "rxjs";

@Pipe({
  name: 'counter',
  standalone: true
})
export class CounterPipe implements PipeTransform {

    transform(value: number): any {
        return interval(100 / value).pipe(
            take(value),
            map(i => i + 1)
        );
    }

}
