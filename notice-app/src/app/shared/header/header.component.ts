import { Component, ViewEncapsulation } from '@angular/core';
import { inject } from '@angular/core';
import { NoticeService } from '../services/notice.service';

@Component({
  selector: 'app-header',
  standalone: true,
   imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private noticeService: NoticeService) {}

  notices = inject(NoticeService);
  drawer: any;

addNewNotes(note: string) {
  this.noticeService.addNotice(note);
  }
}
