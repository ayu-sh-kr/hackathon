import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
    year = new Date().getFullYear();
    navigation = {
        solutions: [
            { name: 'Marketing', href: '#' },
            { name: 'Analytics', href: '#' },
            { name: 'Commerce', href: '#' },
            { name: 'Insights', href: '#' },
        ],
        support: [
            { name: 'Pricing', href: '#' },
            { name: 'Documentation', href: '#' },
            { name: 'Guides', href: '#' },
            { name: 'API Status', href: '#' },
        ],
        company: [
            { name: 'About', href: '#' },
            { name: 'Blog', href: '#' },
            { name: 'Jobs', href: '#' },
            { name: 'Press', href: '#' },
            { name: 'Partners', href: '#' },
        ],
        legal: [
            { name: 'Claim', href: '#' },
            { name: 'Privacy', href: '#' },
            { name: 'Terms', href: '#' },
        ],
        social: [
            { name: 'Facebook', href: '#', icon: 'facebook' },
            {
                name: 'Instagram',
                href: 'https://www.instagram.com/webinngo/',
                icon: 'instagram',
            },
        ],
    };
}
