import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Posts} from "../Models/Posts";
import {Users} from "../Models/Users";
import {Admins} from "../Models/Admins";

@Injectable({
  providedIn: 'root'
})
export class UsersServicesService {

  httpUrl:string ="http://localhost:8080/employees/";
  constructor(private http:HttpClient) {}

  getAllEmployees():Observable<Users[]>{
    return this.http.get<Users[]>(this.httpUrl+"/all");
  }

  getAllUsers():Observable<Admins[]>{
    return this.http.get<Admins[]>("http://localhost:8080/user/all");
  }

  getEmployeeById(id:number):Observable<Users>{
    return this.http.get<Users>(this.httpUrl+'/id/'+id);
  }
}
