import { Component, inject } from '@angular/core';
import { NoticeService } from '../../shared/services/notice.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notices',
  standalone: true,
  templateUrl: './notices.component.html',
  styleUrl: './notices.component.scss',
  imports: [CommonModule],
})
export class NoticesComponent {
  noticedatas = inject(NoticeService);


  constructor(private noticeService: NoticeService) {}

  deleteNotice(index: number) {
    this.noticeService.deleteNotice(index)
  }

  readNote(text: string): void {
    if (!text.trim()) {
      return;
    }

    if (speechSynthesis.speaking || speechSynthesis.pending) {
      speechSynthesis.cancel();
    }
  
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'de-DE';
    utterance.rate = 1;  
    utterance.pitch = 3; 
  
    speechSynthesis.speak(utterance);
  }
}
