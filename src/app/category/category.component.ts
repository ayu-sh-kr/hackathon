import {Component} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";

@Component({
    selector: 'app-category',
    standalone: true,
    imports: [],
    templateUrl: './category.component.html',
    styleUrl: './category.component.css'
})
export class CategoryComponent {

    categories:Category[] = [
        {
            svg: '',
            title: 'Education'
        },

        {
            svg: '',
            title: 'Finance and Banking'
        },

        {
            svg: '',
            title: 'Retail and Consumer'
        },

        {
            svg: '',
            title: 'Travel And Tourism'
        },

        {
            svg: '',
            title: 'Transportation and Logistics'
        },

        {
            svg: '',
            title: 'Engineering and Manufacturing'
        },

        {
            svg: '',
            title: 'Technology And IT'
        },

        {
            svg: '',
            title: 'Health Care'
        }
    ]


    constructor(private sanitizer: DomSanitizer) { }

    getSafeSVG(svg: string) {
        return this.sanitizer.bypassSecurityTrustHtml(svg);
    }
}

export interface Category {
    svg: string,
    title: string
}
