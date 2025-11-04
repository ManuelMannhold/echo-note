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

  constructor(private noticeService: NoticeService) {}

  // track which notices are currently playing the delete animation
  removing: boolean[] = [];

  deleteNotice(index: number) {
    // mark item as removing so template adds the animation class
    this.removing[index] = true;

    // wait for animation to finish, then actually delete the notice
    const ANIM_MS = 800; // must match animation duration in CSS
    setTimeout(() => {
      this.noticeDatas.deleteNotices(index);
      // cleanup the removing array so indices remain aligned
      this.removing.splice(index, 1);
    }, ANIM_MS);
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
