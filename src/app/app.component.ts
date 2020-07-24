import { Component, OnInit } from '@angular/core';
import{Todo} from "./Todo"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo';
  TodoVal:string;
  list:Todo[];
ngOnInit(){
  this.list=[];
  this.TodoVal="";
}
addItem(){
  if(this.TodoVal !==""){
    const newItem:Todo={
      id :Date.now(),
      val:this.TodoVal,
      isDone: false
    };
    this.list.push(newItem);
  }
  this.TodoVal="";
}
deleteItem(id:number){
  this.list=this.list.filter(item => item.id !==id);
}
}
