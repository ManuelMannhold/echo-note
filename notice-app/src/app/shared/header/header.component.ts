import { Component, Input } from '@angular/core';
import { NoticeService } from '../services/notice.service';
import { RouterLink } from '@angular/router';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, MatIcon],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isSubmitted = false;
  
  constructor(private noticeService: NoticeService) {}

  @Input() isDarkMode: boolean = false;

  addNewNotes(note: string, event: Event) {
    let input = document.getElementById('input-notes') as HTMLInputElement;
    event.preventDefault();
    this.isSubmitted = true;
    if (!note.trim()) {
      return
    } else {
      this.noticeService.addNotice(note);
      input.value = '';
    this.isSubmitted = false;
    }
    
  }
}
