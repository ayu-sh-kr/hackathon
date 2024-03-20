import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HeroComponent} from "./hero/hero.component";
import {HeaderComponent} from "./header/header.component";
import {ResumeGenerateComponent} from "./resume-generate/resume-generate.component";
import {JobFuseComponent} from "./job-fuse/job-fuse.component";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, HeroComponent, HeaderComponent, ResumeGenerateComponent, JobFuseComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {

    title = 'hackathon';

}
