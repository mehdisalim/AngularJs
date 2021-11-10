import { Component, OnInit } from '@angular/core';
import { DatabaseService } from "../../Services/database.service";
import {Posts} from "../../Models/Posts";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Users} from "../../Models/Users";
import {Admins} from "../../Models/Admins";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email:string ="";
  password:string = "";
  admins:Admins[] = [];

  constructor(public http:HttpClient,private router:Router) {
  }

  ngOnInit(): void {
    this.getAllEmployees();
  }

  getAllEmployees(){
    return this.http.get<Admins[]>("http://localhost:8080/user/all")
      .subscribe(value => this.admins =value);
  }

  get Email(){
    return this.email;
  }
  get Password(){
    return this.password;
  }


  login(email:string , password:string){
    let regex="^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$";
    if (email.length==0) {
      // @ts-ignore
      document.getElementById('emailInput').setAttribute("class","form-control is-invalid");
    }if (password.length < 6){
      // @ts-ignore
      document.getElementById('passwordInput').setAttribute("class","form-control is-invalid");
    }else{
      this.admins.forEach((value)=>{
        if (value.email.toString()==email && value.password == password){
          this.router.navigate(['navbar']);
        }else {
          console.log("Login failed !!!")
          this.email="";
          this.password="";
        }
      })
    }
  }

}
