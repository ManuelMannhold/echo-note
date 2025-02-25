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
}
