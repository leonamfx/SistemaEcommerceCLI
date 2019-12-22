
import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './login/login-guard';
import { LoginComponent } from './login/login/login.component';
const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    { 
        path: 'clientes',
        loadChildren: 'app/clientes/clientes.module#ClientesModule',
        canActivate: [AuthGuard]
    },
    {      path: 'sigin',
           component: LoginComponent
    }
  ];
export const RoutingModule = RouterModule.forRoot(routes);