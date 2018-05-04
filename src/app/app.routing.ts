import {Routes, RouterModule} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { AuthGuard } from './services/AuthGuard/auth.guard';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'app', component: MainComponent, canActivate: [AuthGuard]},
  { path: '**', component: LoginComponent}
];




export const routing = RouterModule.forRoot(appRoutes, {enableTracing: false} );
