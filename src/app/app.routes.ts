import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadComponent() {
            return import('./pages/home/home.component').then((c) => c.HomeComponent);
        },
    },
    {
        path: 'projects',
        loadComponent() {
            return import('./pages/projects/projects.component').then((c) => c.ProjectsComponent);
        },
    },
    {
        path: 'about',
        loadComponent() {
            return import('./pages/about/about.component').then((c) => c.AboutComponent);
        },
    }
];
