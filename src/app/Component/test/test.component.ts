import { Component, OnInit } from '@angular/core';
import {UsersServicesService} from "../../Services/users-services.service";
import {Users} from "../../Models/Users";
import {Admins} from "../../Models/Admins";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  users:Users[]=[];
  admins:Admins[] =[];
  user:any =null;
  _id:number = 1;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  constructor(private data:UsersServicesService) { }

  ngOnInit(): void {
    this.getAllUsers();
    this.getAllAdmins();
    this.getEmployeeById(3);
  }

  getAllAdmins(){
    return this.data.getAllUsers().subscribe(value => this.admins=value);
  }

  getAllUsers(){
    return this.data.getAllEmployees().subscribe((value) =>{
      this.users=value;
    });
  }
  getEmployeeById(id:number){
    return this.data.getEmployeeById(id).subscribe(value => this.user=value);
  }
}
