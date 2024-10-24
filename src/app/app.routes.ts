import { Routes } from '@angular/router';
import { MusicComponent } from './music/music.component';
import { NewsComponent } from './music/news/news.component';
import { DetailsComponent } from './music/details/details.component';
import { ListComponent } from './music/list/list.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full',
    },
    {
        path: 'music',
        component: MusicComponent,
        children: [
            {
                path: 'new',
                component: NewsComponent,
            },
            {
                path: 'details/:id',
                component: DetailsComponent,
            },
            {
                path: 'list',
                component: ListComponent,
            }
        ]
    },
    // Se você quiser acessar a lista diretamente na raiz
    {
        path: 'list',
        component: ListComponent,
    }
];
