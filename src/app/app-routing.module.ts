import { DeleteUserComponent } from './delete-user/delete-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UsersListComponent } from './users-list/users-list.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { DeleteCompanyComponent } from './delete-company/delete-company.component';
import { UpdateCompanyComponent } from './update-company/update-company.component';
import { AddCompanyComponent } from './add-company/add-company.component';
import { ViewCompanyComponent } from './view-company/view-company.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';

import { AuthGuard } from './auth/auth.guard';
import { CompaniesListComponent } from './companies-list/companies-list.component';

const routes: Routes = [
  //{ path : '', component: HomeComponent },
  { path : '', redirectTo : 'companies-list', pathMatch : 'full' },
  { path : 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path : 'companies-list', component : CompaniesListComponent, canActivate : [AuthGuard] },
  { path : 'view-company', component : ViewCompanyComponent, canActivate : [AuthGuard] },
  { path : 'add-company', component : AddCompanyComponent, canActivate : [AuthGuard] },
  { path : 'update-company', component : UpdateCompanyComponent, canActivate : [AuthGuard] },
  { path : 'delete-company', component : DeleteCompanyComponent, canActivate : [AuthGuard] },
  { path : 'products-list', component : ProductsListComponent, canActivate : [AuthGuard] },
  { path : 'add-product', component : AddProductComponent, canActivate : [AuthGuard] },
  { path : 'update-product', component : UpdateProductComponent, canActivate : [AuthGuard] },
  { path : 'delete-product', component : DeleteCompanyComponent, canActivate : [AuthGuard] },
  { path : 'view-product', component : ViewProductComponent, canActivate : [AuthGuard] },
  { path : 'app-users-list', component : UsersListComponent, canActivate : [AuthGuard] },
  { path : 'update-users', component : UpdateUserComponent, canActivate : [AuthGuard] },
  { path : 'delete-users', component : DeleteUserComponent, canActivate : [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
