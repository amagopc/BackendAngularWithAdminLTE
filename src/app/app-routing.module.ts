import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Notfound404Component } from './pages/notfound404/notfound404.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AccountComponent } from './pages/account/account.component';
import { LoginComponent } from './pages/login/login.component';


const routes: Routes = [
{
  path: '',
  redirectTo: 'login',
  pathMatch: 'full'
},
{
  path: 'login',
  component: LoginComponent
},
{
  path: '404.html',
  component: Notfound404Component
},
{
  path: '**',
  redirectTo: '/404.html'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
