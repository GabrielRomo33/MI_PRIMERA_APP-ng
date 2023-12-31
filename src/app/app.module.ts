import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PersonasComponent } from './Persoans/personas.component';
import { PersonaComponent } from './persona/persona.component';
import { FormsModule } from '@angular/forms';
 
@NgModule({
  declarations: [//aqui van los componentes
    AppComponent,
    PersonasComponent,
    PersonaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule//ayuda a que funcione correctamente el two way bunding (doble enlaces)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
