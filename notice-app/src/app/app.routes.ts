import { Routes } from '@angular/router';
import { MaincontentComponent } from './maincontent/maincontent.component';
import { NoticesComponent } from './maincontent/notices/notices.component';
import { TrashComponent } from './maincontent/trash/trash.component';

export const routes: Routes = [
    {path: '', component: MaincontentComponent},
    {path: 'notices', component: NoticesComponent},
    {path: 'trash', component: TrashComponent}
];
