import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InventionsListComponent } from './inventions-list/inventions-list.component';
import { SigninComponent } from './auth/signin/signin.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { AuthGuard } from './auth/auth-guard.service';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'inventions', component: InventionsListComponent, canActivate: [AuthGuard] },
  { path: 'signin', component: SigninComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
