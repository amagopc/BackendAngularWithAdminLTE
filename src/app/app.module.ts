import { BrowserModule } from '@angular/platform-browser';
import { NgModule,APP_INITIALIZER } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//Import Module
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//Import Service
import { SystemsService } from './services/systems.service';
import { ShopService } from './services/shop.service';
import { SettingService } from './services/setting.service';
import { RestfullService } from './services/restfull.service';
import { OrderService } from './services/order.service';
import { AccountService } from './services/account.service';
//Import Component
import { AppheaderComponent } from './components/appsection/appheader/appheader.component';
import { AppfooterComponent } from './components/appsection/appfooter/appfooter.component';
import { AppmenuComponent } from './components/appsection/appmenu/appmenu.component';
import { AppsettingComponent } from './components/appsection/appsetting/appsetting.component';
//Config
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeModule } from './pages/home/home.module';
import { DashboardModule } from './pages/dashboard/dashboard.module';
import { AccountComponent } from './pages/account/account.component';
import { AppconfigService } from './services/appconfig.service';
import { environment } from '../environments/environment';
import { AccountModule } from './pages/account/account.module';
import { ProductComponent } from './pages/product/product.component';
import { ShopComponent } from './pages/shop/shop.component';
import { ProductModule } from './pages/product/product.module';
import { ShopModule } from './pages/shop/shop.module';
import { LoginComponent } from './pages/login/login.component';
import { TopupComponent } from './pages/topup/topup.component';
import { SettingComponent } from './pages/setting/setting.component';
import { SettingModule } from './pages/setting/setting.module';
import { TopupModule } from './pages/topup/topup.module';

export function initConfig(appConfig: AppconfigService) { return () => appConfig.load(environment.config); }

@NgModule({
  declarations: [
    AppComponent,
    AppheaderComponent,
    AppfooterComponent,
    AppmenuComponent,
    AppsettingComponent,
    HomeComponent,
    DashboardComponent,
    AccountComponent,
    ProductComponent,
    ShopComponent,
    LoginComponent,
    TopupComponent,
    SettingComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HomeModule,
    DashboardModule,
    AccountModule,
    ProductModule,
    ShopModule,
    TopupModule,
    SettingModule,
    AppRoutingModule, /**Final RoutingModule */
  ],
  providers: [
    AppconfigService, { provide: APP_INITIALIZER, useFactory: initConfig, deps: [AppconfigService], multi: true },
    SystemsService,
    ShopService,
    SettingService,
    RestfullService,
    OrderService,
    AccountService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
