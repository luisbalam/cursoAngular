import { Component } from '@angular/core';
import { IUser } from 'src/shared/data';

@Component({
  selector: 'app-content', // es el que sirve para poderlo asociar con el html
  templateUrl: './content.component.html', 
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {
  users:IUser[]=[];
  constructor(){
    this.users.push({id:1,
    create_on:'04/07/2023',
    update_on:'05/07/2023',
    name:"luis",
    username:"balam",
    birthday:new Date("1971/07/14"),
    city:"Valladolid" })
  }
}
