import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NoticeService {
  private storageKey = 'notices';
  notices: string[] = [];

  constructor() {
    this.loadFromLocalStorage();
  }

  addNotice(note: string) {
    this.notices.push(note);
    this.saveToLocalStorage();
  }

  getNotices(): string[] {
    return this.notices;
  }

  deleteNotice(index: number) {
    this.notices.splice(index, 1);
    this.saveToLocalStorage();
  }

  private saveToLocalStorage() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.notices));
  }

  private loadFromLocalStorage() {
    const savedNotices = localStorage.getItem(this.storageKey);
    if (savedNotices) {
      this.notices = JSON.parse(savedNotices);
    }
  }
}
