import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./Component/login/login.component";
import {navBarComponent} from "./Component/NavBar/navBar.component";

const routes: Routes = [
  { path:"navbar", component:navBarComponent },
  { path:"login", component:LoginComponent },
  { path:"", component:LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
