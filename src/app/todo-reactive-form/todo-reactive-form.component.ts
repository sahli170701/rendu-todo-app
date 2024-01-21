import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TodoService } from '../service-name.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-reactive-form',
  templateUrl: './todo-reactive-form.component.html',
  styleUrls: ['./todo-reactive-form.component.css']
})
export class TodoReactiveFormComponent {

  constructor(private formBuilder : FormBuilder){}
    authForm=this.formBuilder.group(
      {
      login:['',Validators.required],
      password:['',Validators.required]
    }
    )
  
    checkLogin(){
      
    }
}
