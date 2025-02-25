import { Component, Input } from '@angular/core';
import { NoticeService } from '../services/notice.service';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private noticeService: NoticeService) {}

  @Input() isDarkMode: boolean = false;

  addNewNotes(note: string, event: Event) {
    let input = document.getElementById('input-notes') as HTMLInputElement;
    event.preventDefault();
    if (note.trim()) {
      this.noticeService.addNotice(note);
    }
    input.value = '';
  }
}
