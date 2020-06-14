import { Component } from '@angular/core';
import { title } from 'process';
import { Todo } from 'src/models/todo.model';

// Metadados do component
@Component({
    selector: 'app-root', // Tag <app-root> para ser usado app.component.html
    templateUrl: './app.component.html', // A qual .html esse component pertence
    styleUrls: ['./app.component.css'] // Arquivo de estilo desse component
})


export class AppComponent {

    public todos: Todo[] = [];
    public title = 'Dácio Lima';

    constructor() {
        this.todos.push(new Todo(1, 'Ir ao supermercado', true));
        this.todos.push(new Todo(2, 'Estudar', false));
        this.todos.push(new Todo(3, 'Comprar roupas', false));
    }

    alteraTitle() {
        this.title = 'David';
    }

    removeItem(todo: Todo) {
        const index = this.todos.indexOf(todo);
        if (index !== -1) {
            this.todos.splice(index, 1);
        }
    }

    markAsDone() {

    }

    markAsUndone() {

    }


}
