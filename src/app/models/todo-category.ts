export class TodoCategory {
    constructor(
    private title: string,
    private name: string,
    private color: string,
    private order: string,
    private id: string = null
    ) {
    
    }
    
    getId() { return this.id; }
    getTitle() { return this.title; }
    getName() { return this.name; }
    getColor() { return this.color; }
    getOrder() { return this.order; }
    }
