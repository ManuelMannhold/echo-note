import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class NoticeService {
    private notices: string[] = [];

    addNotice(note: string) {
      this.notices.push(note);
    }
    
    getNotices(): string[] {
      return this.notices;
    }
}
