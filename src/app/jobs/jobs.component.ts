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
            image: 'https://www.myfuse.in/dashboard/view-job-post.php?id=198',
            category: 'Technology and IT',
            location: 'Bengaluru',
            ctc: 'Not Disclosed',
            role: 'Job Role : Associate Analyst',
            active: false,
            workTime: 'Full Time'
        },

        {
            company: 'AIRBUS',
            image: 'https://www.myfuse.in/dashboard/view-job-post.php?id=197',
            category: 'Technology and IT',
            location: 'Bangalore Area',
            ctc: 'Bangalore Area',
            role: 'Data Analyst',
            active: false,
            workTime: 'Full Time'
        },

        {
            company: 'Bajaj Allianz',
            image: 'https://www.myfuse.in/dashboard/view-job-post.php?id=196',
            category: 'Technology and IT',
            location: 'Begusarai – Ext',
            ctc: ' 4.5 LPA (Expected)',
            role: 'Junior Service Engineer',
            active: false,
            workTime: 'Full Time'
        },

        {
            company: 'Amdocs',
            image: 'https://www.myfuse.in/dashboard/view-job-post.php?id=195',
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
