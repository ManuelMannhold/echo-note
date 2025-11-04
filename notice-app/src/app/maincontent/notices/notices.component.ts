import { Component, inject } from '@angular/core';
import { NoticeService } from '../../shared/services/notice.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-notices',
  standalone: true,
  templateUrl: './notices.component.html',
  styleUrl: './notices.component.scss',
  imports: [CommonModule, FormsModule],
})
export class NoticesComponent {
  noticeDatas = inject(NoticeService);
  removing: boolean[] = [];
  incoming: boolean[] = [];

  constructor(private noticeService: NoticeService) {}

  ngOnInit(): void {
    this.noticeService.addedNotice.subscribe((index: number) => {
      this.incoming[index] = true;
      setTimeout(() => {
        this.incoming[index] = false;
      }, 400);
    });
  }

  deleteNotice(index: number) {
    this.removing[index] = true;

    const ANIMATION_TIMER = 800;
    setTimeout(() => {
      this.noticeDatas.deleteNotices(index);
      this.removing.splice(index, 1);
    }, ANIMATION_TIMER);
  }

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

  editingIndex: number | null = null;
  editingText: string = '';

  editNotice(text: string, index: number): void {
    this.editingIndex = index;
    this.editingText = text;
  }

  saveEdit(): void {
    if (this.editingIndex !== null && this.editingText.trim()) {
      this.noticeDatas.notices[this.editingIndex] = this.editingText.trim();
      this.editingIndex = null;
      this.editingText = '';
    }
  }

  cancelEdit(): void {
    this.editingIndex = null;
    this.editingText = '';
  }
}
