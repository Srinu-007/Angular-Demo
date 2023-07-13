import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminheaderComponent } from './adminheader/adminheader.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from './products/products.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AdminComponent,
    ProfileComponent,
    AdminheaderComponent,
    AdmindashboardComponent,
    UserComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class AdminModule { }
