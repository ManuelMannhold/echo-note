import { Component, Input } from '@angular/core';
import { NoticeService } from '../services/notice.service';
import { Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isSubmitted = false;

  constructor(private noticeService: NoticeService, private router: Router) { }

  @Input() isDarkMode: boolean = false;

  addNewNotes(note: string, event: Event) {
    let input = document.getElementById('input-notes') as HTMLInputElement;
    event.preventDefault();
    this.isSubmitted = true;
    if (!note.trim()) {
      return
    } else {
      this.noticeService.addNotice(note);
      this.router.navigate(['/notices']);
      input.value = '';
      this.isSubmitted = false;
    }
  }
}
