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
  isEditing: boolean[] = [];

  constructor() {
    this.isEditing = new Array(this.noticedatas.notices.length).fill(false);
  }

  editNotice(index: number) {
    this.isEditing[index] = true;
  }

  saveNotice(index: number, event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.noticedatas.editNotice(index, inputElement.value);
    this.isEditing[index] = false;
  }

  deleteNotice(index: number) {
    this.noticedatas.deleteNotices(index);
    this.isEditing.splice(index, 1);
  }
}
