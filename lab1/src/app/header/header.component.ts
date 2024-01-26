import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  name: string = "Omnia Mohamed"
  position: string = "Software Engineer"
  img_url: string = "https://www.webmechanix.com/wp-content/uploads/2021/08/womenintech-banner.png"

}
