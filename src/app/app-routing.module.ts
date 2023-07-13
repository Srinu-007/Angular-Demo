import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { AboutusComponent } from './Components/aboutus/aboutus.component';
import { ProductsComponent } from './Components/products/products.component';
import { LoginComponent } from './Components/login/login.component';
import { PagenotfoundComponent } from './Components/pagenotfound/pagenotfound.component';
import { CartComponent } from './Components/cart/cart.component';
import { SignupComponent } from './Components/signup/signup.component';
import { MobilesComponent } from './Components/mobiles/mobiles.component';
import { ElectronicsComponent } from './Components/electronics/electronics.component';
import { KitchenComponent } from './Components/kitchen/kitchen.component';
import { FurnitureComponent } from './Components/furniture/furniture.component';
import { FashionComponent } from './Components/fashion/fashion.component';
import { BeautyComponent } from './Components/beauty/beauty.component';
import { GroceryComponent } from './Components/grocery/grocery.component';
import { FilterComponent } from './Components/filter/filter.component';
import { DashboardhomeComponent } from './Components/Dashboard/dashboardhome/dashboardhome.component';
import { ProfileComponent } from './Components/Dashboard/profile/profile.component';
import { DheaderComponent } from './Components/Dashboard/dheader/dheader.component';
import { GaurdsGuard } from './gaurd/gaurds.guard';


const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"home",redirectTo:"/",pathMatch:"full"},
  {path:"About",component:AboutusComponent},
  {path:"Products",component:ProductsComponent},
  {path:"Login",component:LoginComponent},
  {path:"Cart",component:CartComponent},
  {path:"signup",component:SignupComponent},
  {path:"filter",component:FilterComponent,children:[
    {path:"mobiles",component:MobilesComponent},
    {path:"electronics",component:ElectronicsComponent},
    {path:"kitchen/:id",component:KitchenComponent},
    {path:"furniture",component:FurnitureComponent},
    {path:"fashion",component:FashionComponent},
    {path:"beauty",component:BeautyComponent},
    {path:"grocery",component:GroceryComponent},
  ]},
  {path:"mobiles",component:MobilesComponent},
    {path:"electronics",component:ElectronicsComponent},
    {path:"furniture",component:FurnitureComponent},
    {path:"fashion",component:FashionComponent},
    {path:"beauty",component:BeautyComponent},
    {path:"grocery",component:GroceryComponent},
  {path:"dashboardhome",component:DashboardhomeComponent,canActivate:[GaurdsGuard]},
  {path:"Profile",component:ProfileComponent},
  {path:"dheader",component:DheaderComponent},
  {path:"admin",loadChildren:()=>import('./Components/admin/admin.module').then
   (m=>m.AdminModule)},
  {path:"**",component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
