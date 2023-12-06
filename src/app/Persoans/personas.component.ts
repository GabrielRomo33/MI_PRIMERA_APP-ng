import { Component } from '@angular/core';

@Component({
    selector: 'app-persoans',
    templateUrl: './personas.component.html',
    styleUrls: ['./personas.component.css'] 
})
export class PersonasComponent{
    deshabilitar = false;
    mensaje = 'no se ha agregado ninguna persona';
    titulo = '';

    agregarPeronsa(){
        this.mensaje = 'Persona agregada'
    }

    // modificarTitulo(event: Event){
    //     this.titulo = (<HTMLInputElement>event.target).value;
    // }
}