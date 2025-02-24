import { Component, inject } from '@angular/core';
import { NoticeService } from '../../shared/services/notice.service';

@Component({
  selector: 'app-notices',
  standalone: true,
  imports: [],
  templateUrl: './notices.component.html',
  styleUrl: './notices.component.scss'
})
export class NoticesComponent {

  constructor(private noticeService: NoticeService) {}

  notices = inject(NoticeService);
  
  ngOnInit() {
  }
  }
  
