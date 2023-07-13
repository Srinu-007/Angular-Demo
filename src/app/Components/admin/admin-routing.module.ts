import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ProfileComponent } from './profile/profile.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { UserComponent } from './user/user.component';
import { ProductsComponent } from './products/products.component';
import { AdmingaurdGuard } from './admingaurd.guard';

const routes: Routes = [
  {path:"",component:AdminComponent},
  {path:"admindashboard",component:AdmindashboardComponent,canActivate:[AdmingaurdGuard]},
  {path:"profile",component:ProfileComponent},
  {path:"user",component:UserComponent},
  {path:"product",component:ProductsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
