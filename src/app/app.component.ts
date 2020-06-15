import { Component } from '@angular/core';
import { Todo } from 'src/models/todo.model';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';

// Metadados do component
@Component({
    selector: 'app-root', // Tag <app-root> para ser usado app.component.html
    templateUrl: './app.component.html', // A qual .html esse component pertence
    styleUrls: ['./app.component.css'] // Arquivo de estilo desse component
})


export class AppComponent {

    public todos: Todo[] = [];
    public title = 'Minhas Tarefas';
    public form: FormGroup;
    public mode = 'list';

    constructor( private fb: FormBuilder ) {

        this.form = this.fb.group({
            // Se for usa mais de um Validators deve-se usa o Validators.compose()
            title: ['', Validators.compose([
                Validators.minLength(3),
                Validators.maxLength(60),
                Validators.required
            ])]
        });

        this.load();
    }

    add() {
        const title = this.form.controls['title'].value;
        const id = this.todos.length + 1;
        this.todos.push(new Todo(id, title, false));
        this.save();
        this.clear();
    }

    clear() {
        this.form.reset();
    }

    alteraTitle() {
        this.title = 'David';
    }

    removeItem(item: Todo) {
        const index = this.todos.indexOf(item);
        if (index !== -1) {
            this.todos.splice(index, 1);
        }
        this.save();
    }

    markAsDone(item: Todo) {
        item.done = true;
        this.save();
    }

    markAsUndone(item: Todo) {
        item.done = false;
        this.save();
    }

    save() {
        // Convertendo o Json para formato string a ser guardado no localStorage
        const data = JSON.stringify(this.todos);
        localStorage.setItem('todos', data);
        this.mode = 'list';
    }

    load() {
        // Convertendo string do localStorage para JSON
        const data = localStorage.getItem('todos');
        if (data) {
            this.todos = JSON.parse(data);
        } else {
            this.todos = [];
        }
    }

    changeMode(mode: string){
        this.mode = mode;
    }
}
