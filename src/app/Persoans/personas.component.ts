import { Component } from '@angular/core';

@Component({
    selector: 'app-persoans',
    templateUrl: './personas.component.html',
    styleUrls: ['./personas.component.css'] 
})
export class PersonasComponent{
    deshabilitar = false;
    mensaje = '';
    titulo = '';
    mostrar = false;

    agregarPeronsa(){
        this.mostrar = true;//Variable  para mostrar el mensaje
        this.mensaje = 'Persona agregada'
    }

    // modificarTitulo(event: Event){
    //     this.titulo = (<HTMLInputElement>event.target).value;
    // }
}