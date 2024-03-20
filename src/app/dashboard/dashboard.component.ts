import {Component, OnInit} from '@angular/core';
import {CounterPipe} from "../counter.pipe";

@Component({
  selector: 'app-dashboard',
  standalone: true,
    imports: [
        CounterPipe
    ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

    stats: Stat[] = [
        {
            count: 2500,
            title: 'Active Students'
        },

        {
            count: 3500,
            title: 'Jobs'
        },

        {
            count: 5500,
            title: 'Active Application'
        }
    ]

    animatedCounts: number[] = [];

    constructor(private counterPipe: CounterPipe) { }


    ngOnInit() {
        for (let i = 0; i < this.stats.length; i++) {
            this.counterPipe.transform(this.stats[i].count).subscribe((count: number) => {
                this.animatedCounts[i] = count;
            });
        }
    }
}

export interface Stat {
    count:number,
    title: string,
}
