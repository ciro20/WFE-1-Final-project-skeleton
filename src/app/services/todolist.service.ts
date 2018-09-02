import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TodoCategory } from '../models/todo-category';
import { Airtable } from '../models/airtable';
 
@Injectable({
  providedIn: 'root'
})
export class TodolistService {

  
  constructor( private http: HttpClient) { 
    this.getTodoData();
  }
  public searchTerm:string=""
  private orderNo:number;
  private addNewt: boolean;
  private myTodoData:Todo[] = [];
private myTodoCategoryData:TodoCategory [] = [];
private readonly listTodosUrl = 'https://api.airtable.com/v0/app7uWZ3CMESZi7WI/todos';
private readonly listTodoCategoriesUrl = 'https://api.airtable.com/v0/app7uWZ3CMESZi7WI/categories';
getTodoData() {
  const httpOptions = {
  headers: new HttpHeaders(
  {
  'Authorization': 'Bearer keyKSN5waI74aIlQV' // αυτό είναι κάτι σαν τον κωδικό πρόσβασης στη βάση. ονομάζεται API key
  })
  };
  
  this.http.get/*post*/<Airtable>(this.listTodoCategoriesUrl/* +'/'+todo.getId() ayto gia to PUT *//*, {fields: {}}*/, httpOptions ).subscribe((data: Airtable) => {-
    // this.getTodoData();
  this.myTodoCategoryData.splice(0,this.myTodoCategoryData.length);
  for(let r of data.records) {
  this.myTodoCategoryData.push( new TodoCategory(
  r.fields.title,
  r.fields.name,
  r.fields.color,
  r.fields.order,
  r.id
  ));
  }
  });
  this.http.get<Airtable>(this. listTodosUrl, httpOptions).subscribe((data: Airtable) => {
  this.myTodoData.splice(0,this. myTodoData.length);
  for(let r of data.records) {
  this.myTodoData.push( new Todo(
  r.fields.done,
  r.fields.description,
  r.fields.category,
  r.fields.order,
  r.id
  ));
  }
  });
  }

  public returnTodoData(){
    
    return this.myTodoData;
  }
  public returnTodoCategories(){
    return this.myTodoCategoryData; //Object.assign([], this.myTodoCategoryData );
  }
public storeTodo(t:Todo){
  this.addNewt=undefined;
  const httpOptions = {
    headers: new HttpHeaders(
    {
    'Authorization': 'Bearer keyKSN5waI74aIlQV' 
    })
    };
  for (let i=0;i<this.myTodoData.length-1;i++)
  {if (this.myTodoData[i].getId() == t.getId())
    {this.myTodoData[i]= t;
      this.addNewt= false;}
      }
    if (this.addNewt == undefined)
    {this.addNewt = true;}
    // t.setOrder("1");}
    // t.setOrder(this.myTodoData.length);}
    if (this.addNewt)
    {
      this.http.post<Airtable>(this. listTodosUrl,{fields: {description: t.getDescription() ,
        category: t.getCategory() ,
        done: t.isDone(),
         order: t.getOrder()
       }},httpOptions).subscribe((data: Airtable) =>
      {
        this.getTodoData();
      });
    }else{
      
      this.http.patch<Airtable>(this.listTodosUrl+'/'+t.getId(),{fields: {description: t.getDescription() ,
        category: t.getCategory() ,
        done: t.isDone(),
         order: t.getOrder()
       }},httpOptions).subscribe((data: Airtable) =>
  {
    this.getTodoData();
  });
      }
    } 
    deleteTodo(t:Todo)
  { let orderOfDeletedTodo = 0;
    for (let i=1;i<this.myTodoData.length;i++)
    { if (t == this.myTodoData[i-1])
      {
        orderOfDeletedTodo = t.getOrder();
      }
    }
    for (orderOfDeletedTodo;orderOfDeletedTodo<this.myTodoData.length-1;orderOfDeletedTodo++)
    {
     this.myTodoData[orderOfDeletedTodo].setOrder(orderOfDeletedTodo-1) ;
    }
    const httpOptions = {
    headers: new HttpHeaders(
    {
    'Authorization': 'Bearer keyKSN5waI74aIlQV' 
    })
    };
    this.http.delete<Airtable>(this.listTodosUrl+'/'+t.getId(),httpOptions).subscribe((data: Airtable) =>
    {
      this.getTodoData();
    });

  }
  

    }
    
  
  
  
  





