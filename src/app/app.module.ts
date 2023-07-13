import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { AboutusComponent } from './Components/aboutus/aboutus.component';
import { ProductsComponent } from './Components/products/products.component';
import { CartComponent } from './Components/cart/cart.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { PagenotfoundComponent } from './Components/pagenotfound/pagenotfound.component';
import { LoginComponent } from './Components/login/login.component';
import { SignupComponent } from './Components/signup/signup.component';
import { FormsModule } from '@angular/forms';
import { MobilesComponent } from './Components/mobiles/mobiles.component';
import { ElectronicsComponent } from './Components/electronics/electronics.component';
import { FashionComponent } from './Components/fashion/fashion.component';
import { BeautyComponent } from './Components/beauty/beauty.component';
import { KitchenComponent } from './Components/kitchen/kitchen.component';
import { FurnitureComponent } from './Components/furniture/furniture.component';
import { GroceryComponent } from './Components/grocery/grocery.component';
import { FilterComponent } from './Components/filter/filter.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './Components/Dashboard/dashboard/dashboard.component';
import { DashboardhomeComponent } from './Components/Dashboard/dashboardhome/dashboardhome.component';
import { ProfileComponent } from './Components/Dashboard/profile/profile.component';
import { LogoutComponent } from './Components/Dashboard/logout/logout.component';
import { DheaderComponent } from './Components/Dashboard/dheader/dheader.component';
import { ProductComponent } from './Components/product/product.component';
import { PipePipe } from './Components/pipe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    ProductsComponent,
    CartComponent,
    HeaderComponent,
    FooterComponent,
    PagenotfoundComponent,
    LoginComponent,
    SignupComponent,
    MobilesComponent,
    ElectronicsComponent,
    FashionComponent,
    BeautyComponent,
    KitchenComponent,
    FurnitureComponent,
    GroceryComponent,
    FilterComponent,
    DashboardComponent,
    DashboardhomeComponent,
    ProfileComponent,
    LogoutComponent,
    DheaderComponent,
    ProductComponent,
    PipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
