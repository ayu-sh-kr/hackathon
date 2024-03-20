import { Component } from '@angular/core';
import {CategoryComponent} from "../category/category.component";

@Component({
  selector: 'app-spotlight',
  standalone: true,
    imports: [
        CategoryComponent
    ],
  templateUrl: './spotlight.component.html',
  styleUrl: './spotlight.component.css'
})
export class SpotlightComponent {

}
