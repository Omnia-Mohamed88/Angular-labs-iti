import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component'
import { AboutMeComponent } from './about-me/about-me.component'
import { SkillsComponent } from './skills/skills.component'
import { ProjectsComponent } from './projects/projects.component'
import { FooterComponent } from './footer/footer.component'


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [HeaderComponent, AboutMeComponent, SkillsComponent, ProjectsComponent, FooterComponent]
})
export class AppComponent {
  title = 'angular-first-lab';
}
