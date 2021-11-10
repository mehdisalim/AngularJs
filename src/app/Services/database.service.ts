import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Posts} from "../Models/Posts";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  httpUrl:string ="https://jsonplaceholder.typicode.com/posts";
  constructor(private http:HttpClient) {}

  getAllEmployees():Observable<Posts[]>{
    return this.http.get<Posts[]>(this.httpUrl);
  }
}
