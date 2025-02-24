import { Component } from '@angular/core';
import { NoticesComponent } from './notices/notices.component';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';

@Component({
  selector: 'app-maincontent',
  standalone: true,
  imports: [NoticesComponent, MatSidenavModule, MatButtonModule],
  templateUrl: './maincontent.component.html',
  styleUrl: './maincontent.component.scss'
})
export class MaincontentComponent {
  showFiller = false;
}
