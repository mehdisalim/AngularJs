import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './Component/AppComponent/app.component';
import { navBarComponent } from './Component/NavBar/navBar.component';
import { MenuComponent } from './Component/menu/menu.component';
import {FormsModule} from "@angular/forms";
import { LoginComponent } from './Component/login/login.component';
import {HttpClientModule} from "@angular/common/http";
import { TestComponent } from './component/test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    navBarComponent,
    MenuComponent,
    LoginComponent,
    TestComponent
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
