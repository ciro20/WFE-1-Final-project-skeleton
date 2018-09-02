import { CloneVisitor } from "@angular/compiler/src/i18n/i18n_ast";

export class Todo {

    private static IDcounter;
    constructor(
    private done: boolean,
    private description: string,
    private category: string,
    private order: number,
    private id: string = undefined // number or string?
    ) {
        Todo.IDcounter++
        if (typeof id == 'undefined')
        { this.id = Todo.IDcounter;}
       
    
    }
    
    getId() { return this.id; }
    isDone() { return this.done; }
    getOrder() { return this.order; }
    setOrder(o:number){ this.order = o;}
    getDescription() { return this.description; }
    getCategory() { return this.category; }
    

    public clone(): Todo
    {
        let newTodo = new Todo (
            this.done,
            this.description,
            this.category,
            this.order,
            this.id);
        return newTodo;
    } 
}
