import { Component, OnInit, ViewChild } from '@angular/core';
import { TodolistService } from '../../services/todolist.service';
import { ListComponent } from '../list/list.component';
//import { Job } from '../models/job';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.css']
})
export class WrapperComponent implements OnInit {

@ViewChild('todoList')
listComponent: ListComponent;

  constructor( private todolistservice: TodolistService ) { ;}

 
  ngOnInit() {
  }

}
