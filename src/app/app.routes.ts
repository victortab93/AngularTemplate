import { Routes } from '@angular/router';
import { HomeComponent } from './shared/home/home.component';

export const routes: Routes = [
    { 
        path: '', 
        component: HomeComponent,
        children: [
            { path: 'feature1', loadChildren: () => import('./features/feature-1/feature-1.module').then(m => m.Feature1Module)}
        ] 
    },
    { path: 'login', loadChildren: () => import('./shared/login/login.module').then(m => m.LoginModule) },
    { path: '**', redirectTo: ''}
];
