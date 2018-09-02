import { Component, OnInit, Input } from '@angular/core';
import { TodolistService } from '../../services/todolist.service';
import { Todo } from '../../models/todo';
import { TodoCategory } from '../../models/todo-category';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  // @Input ('addtodoInput')
  // private addtodo;

  todos: Todo[];
  categories: TodoCategory[];
 
  editedTodo : Todo = undefined;
  deletedTodo: Todo =undefined;

  count:number;

  searchTerm:string="";

  constructor(private todolistservice: TodolistService ) { 
    this.todos = todolistservice.returnTodoData();
    this.countDones();
    this.todos.filter((t:Todo) => {
       if (t.getDescription().indexOf(this.searchTerm)>-1 || t.getCategory().indexOf(this.searchTerm)>-1)     
     {return true;} 
        return false;
      });
    this.categories=todolistservice.returnTodoCategories();
    
    
  }

  ngOnInit() {
    
  }
  // ngAfterViewInit(): void
  // {console.log("ok?")
  // console.log(this.todos[0]);
  //   this.countDones();}
  
  editTodo(t:Todo){
    this.editedTodo = t.clone();
    return false;
  }
  createTodo(){
  this.editedTodo = new Todo(false,"","",this.todos.length+1 );
  }
  saveTodo(){
    this.todolistservice.storeTodo(this.editedTodo);
    this.editedTodo=undefined;
  }

  deleteTodo(t:Todo)
  { this.deletedTodo = t.clone();
    this.todolistservice.deleteTodo(this.deletedTodo);
  }
  countDones(){
    this.count=0;
    for (let i=0;i<this.todos.length-1;i++)
    {  
        if (this.todos[i].isDone() ){
          this.count++
        }

    }
  }
}
