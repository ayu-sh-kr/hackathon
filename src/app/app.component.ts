import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HeroComponent} from "./hero/hero.component";
import {HeaderComponent} from "./header/header.component";
import {ResumeGenerateComponent} from "./resume-generate/resume-generate.component";
import {JobFuseComponent} from "./job-fuse/job-fuse.component";
import {SpotlightComponent} from "./spotlight/spotlight.component";
import {FooterComponent} from "./footer/footer.component";
import {CategoryComponent} from "./category/category.component";
import {JobsComponent} from "./jobs/jobs.component";
import { HowitworksComponent } from './howitworks/howitworks.component';
import { RecentblogComponent } from './recentblog/recentblog.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, HeroComponent, HeaderComponent, ResumeGenerateComponent, JobFuseComponent, SpotlightComponent, FooterComponent, CategoryComponent, JobsComponent,HowitworksComponent,RecentblogComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {

    title = 'hackathon';

}
