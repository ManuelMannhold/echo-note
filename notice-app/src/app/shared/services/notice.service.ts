import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NoticeService {
  splice(index: number) {
    throw new Error('Method not implemented.');
  }
  private storageKey = 'notices';
  private storageKeyTrash = 'trash'
  notices: string[] = [];
  trash: string[] = [];
  date = new Date().toLocaleString("de-DE", { timeZone: "Europe/Berlin" });

  constructor() {
    this.loadFromLocalStorage();
  }

  addNotice(note: string) {
    this.notices.push(note);
    this.saveToLocalStorage();
  }

  editNotice(index: number, newNote: string) {
    this.notices[index] = newNote;
    this.saveToLocalStorage();
  }

  getNotices(): string[] {
    return this.notices;
  }

  deleteNotices(index: number) {
    this.trash.push(this.notices[index])
    this.notices.splice(index, 1);
    this.saveToLocalStorage();
  }

  deleteTrash(index: number) {
    this.trash.splice(index, 1);
  }

  private saveToLocalStorage() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.notices));
    localStorage.setItem(this.storageKeyTrash, JSON.stringify(this.trash));
  }

  private loadFromLocalStorage() {
    const savedNotices = localStorage.getItem(this.storageKey);
    const savedTrash = localStorage.getItem(this.storageKeyTrash);
    if (savedNotices) {
      this.notices = JSON.parse(savedNotices);
    } if(savedTrash) {
      this.trash = JSON.parse(savedTrash);
    }
  }
}
