import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class NoticeService {
    notices: string[] = ['hase'];

    addNotice(note: string) {
      this.notices.push(note);
    }
    
    getNotices(): string[] {
      return this.notices;
    }
}
