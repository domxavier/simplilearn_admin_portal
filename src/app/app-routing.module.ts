import { DeleteCompanyComponent } from './delete-company/delete-company.component';
import { UpdateCompanyComponent } from './update-company/update-company.component';
import { AddCompanyComponent } from './add-company/add-company.component';
import { ViewCompanyComponent } from './view-company/view-company.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';

import { AuthGuard } from './auth/auth.guard';
import { ServicesComponent } from './services/services.component';
import { CompaniesListComponent } from './companies-list/companies-list.component';

const routes: Routes = [
  { path : '', component: HomeComponent },
  { path : 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path : 'services', component: ServicesComponent, canActivate: [AuthGuard] },
  { path : 'companies-list', component : CompaniesListComponent, canActivate : [AuthGuard] },
  { path : 'view-company', component : ViewCompanyComponent, canActivate : [AuthGuard] },
  { path : 'add-company', component : AddCompanyComponent, canActivate : [AuthGuard] },
  { path : 'update-company', component : UpdateCompanyComponent, canActivate : [AuthGuard] },
  { path : 'delete-company', component : DeleteCompanyComponent, canActivate : [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
