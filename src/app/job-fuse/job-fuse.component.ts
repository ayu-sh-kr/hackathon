import { Component } from '@angular/core';

@Component({
  selector: 'app-job-fuse',
  standalone: true,
  imports: [],
  templateUrl: './job-fuse.component.html',
  styleUrl: './job-fuse.component.css'
})
export class JobFuseComponent {

    fuses: Fuse[] = [
        {
            svg: '',
            title: 'Right Job For You',
            description: 'Myfuse\'s comprehensive platform is designed to help you discover the right job for you.'
        },

        {
            svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V13.5Zm0 2.25h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V18Zm2.498-6.75h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V13.5Zm0 2.25h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V18Zm2.504-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5Zm0 2.25h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V18Zm2.498-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5ZM8.25 6h7.5v2.25h-7.5V6ZM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 0 0 2.25 2.25h10.5a2.25 2.25 0 0 0 2.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0 0 12 2.25Z" />
                  </svg>
                    `,
            title: 'One to One Coverstation With HR\'s',
            description: 'MyFuse offers the unique advantage of one-to-one conversations with HR professionals.'
        },

        {
            svg: '',
            title: 'No Work Experiance required',
            description: 'Myfuse welcomes applicants with no work experience, providing valuable opportunities and resources .'
        },

        {
            svg: '',
            title: 'Easy To Apply',
            description: 'Myfuse\'s straightforward application process is designed to be easy to apply.'
        }
    ]

}

export interface Fuse {
    svg:string,
    title:string,
    description:string
}
