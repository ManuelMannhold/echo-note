import { Component } from '@angular/core';
import { NoticeService } from '../../shared/services/notice.service';

@Component({
  selector: 'app-notices',
  standalone: true,
  templateUrl: './notices.component.html',
  styleUrl: './notices.component.scss'
})
export class NoticesComponent {
  notices: string[] = ['hase'];

  constructor(private noticeService: NoticeService) {}

  ngOnInit() {
    this.notices = this.noticeService.getNotices();
  }
}
