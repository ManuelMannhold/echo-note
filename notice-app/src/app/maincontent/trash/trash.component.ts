import { Component, inject } from '@angular/core';
import { NoticeService } from '../../shared/services/notice.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-trash',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trash.component.html',
  styleUrl: './trash.component.scss',
})
export class TrashComponent {
  trashDatas = inject(NoticeService);

  constructor(private noticeService: NoticeService) {}

  readNotice(text: string): void {
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

  deleteNotice(index: number) {
    this.trashDatas.deleteTrash(index);
  }

  reloadNotice(index: number) {
    this.trashDatas.reloadNotices(index);
  }
}
