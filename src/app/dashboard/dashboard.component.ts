import {AfterViewInit, Component, OnInit} from '@angular/core';
import {CounterPipe} from "../counter.pipe";
import {CountUp} from "countup.js";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-dashboard',
  standalone: true,
    imports: [
        CounterPipe,
        AsyncPipe
    ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements AfterViewInit {

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


    ngAfterViewInit() {
        for (let i = 0; i < this.stats.length; i++) {
            const countUp = new CountUp(`count-${i}`, this.stats[i].count);
            if (!countUp.error) {
                countUp.start();
            } else {
                console.error(countUp.error);
            }
        }
    }
}

export interface Stat {
    count:number,
    title: string,
}
