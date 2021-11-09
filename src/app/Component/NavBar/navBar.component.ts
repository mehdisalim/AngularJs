import {Component} from "@angular/core";
import {NavBarServices} from "./navBar-Services";

@Component({
  selector:'navBar',
  templateUrl: './navBar.component.html'
})
export class navBarComponent{
  name:string ="Mehdi Salim";
  listOfNames:string[] =new NavBarServices().listOfNames;
  isActive:boolean =true;
  isDisable:boolean =false;
  inputContent='mehdi';

  onClicked(){
    alert(this.inputContent);
  }

}
