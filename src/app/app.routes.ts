import { Routes } from '@angular/router';
import { MusicComponent } from './music/music.component';
import { NewsComponent } from './music/news/news.component';

export const routes: Routes = [
    {
        path: '',
        component: MusicComponent,
        children: [
            {
                path: 'new',
                component: NewsComponent,
            }
        ]
    }
];
