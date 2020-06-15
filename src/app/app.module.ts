import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';

// Metadados
@NgModule({
  // Componentes que terão no módulo
  declarations: [
    AppComponent
  ],
  // Informa que a aplicação será Web
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  // Os Services/Repositories serão carregados aqui
  providers: [],

  // Qual primeiro componente irá inicializar quando a aplicação iniciar
  bootstrap: [AppComponent]
})
export class AppModule { }
