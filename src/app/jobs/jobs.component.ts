import { Component } from '@angular/core';

@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [],
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.css'
})
export class JobsComponent {

    jobs: Job[] = [
        {
            company: 'Deloitte',
            image: 'https://www.myfuse.in/uploads/logo/Screenshot%202024-01-24%20at%2012.31.35%20PM.png',
            category: 'Technology and IT',
            location: 'Bengaluru',
            ctc: 'Not Disclosed',
            role: 'Job Role : Associate Analyst',
            active: false,
            workTime: 'Full Time'
        },

        {
            company: 'AIRBUS',
            image: 'https://www.myfuse.in/uploads/logo/Screenshot%202024-01-24%20at%2012.28.26%20PM.png',
            category: 'Technology and IT',
            location: 'Bangalore Area',
            ctc: 'Not Disclosed',
            role: 'Data Analyst',
            active: false,
            workTime: 'Full Time'
        },

        {
            company: 'Bajaj Allianz',
            image: 'https://www.myfuse.in/uploads/logo/Screenshot%202024-01-24%20at%2012.25.26%20PM.png',
            category: 'Technology and IT',
            location: 'Begusarai – Ext',
            ctc: ' 4.5 LPA (Expected)',
            role: 'Junior Service Engineer',
            active: false,
            workTime: 'Full Time'
        },

        {
            company: 'Amdocs',
            image: 'https://www.myfuse.in/uploads/logo/Screenshot%202024-01-24%20at%2012.22.12%20PM.png',
            category: 'Technology and IT',
            location: 'Pune, Maharashtra',
            ctc: ' 4 – 6 LPA (Estimated)',
            role: ' IT Professional – Windows /OS – Fresher',
            active: false,
            workTime: 'Full Time'
        }
    ]

}

export interface Job {
    company: string,
    image: string,
    category: string,
    location: string,
    ctc: string,
    role: string
    active: boolean,
    workTime: string
}
