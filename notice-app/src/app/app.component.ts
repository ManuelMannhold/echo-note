import { Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./shared/header/header.component";
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, MatIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'notice-app';
  isDarkMode: boolean = false;

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
  
    const rootElement = document.body;
  
    if (this.isDarkMode) {
      rootElement.classList.add('dark-mode');
      localStorage.setItem('dark-mode', 'enabled');
    } else {
      rootElement.classList.remove('dark-mode');
      localStorage.setItem('dark-mode', 'disabled');
    }
  }

  ngOnInit() {
    const darkMode = localStorage.getItem('dark-mode');
    if(darkMode === 'enabled') {
      this.isDarkMode = true;
      document.body.classList.add('dark-mode');
    }
  }
}
