import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

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
}

export interface Stat {
    count:number,
    title: string,
}
