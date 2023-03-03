import { Component } from '@angular/core';
import { LoggingService } from '../LoggingService.service';
import { Persona } from '../persona.model';
import { PersonasService } from '../personas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
  
})
export class FormularioComponent {
 
   nombreI: string = '';
   apellidoI: string = '';


  constructor( private loggingService: LoggingService,
               private personasService: PersonasService ) {

  }

  agregarPersona( ) {
    let personan = new Persona( this.nombreI, this.apellidoI )

    this.personasService.agregarPersona(personan);
  }

}
