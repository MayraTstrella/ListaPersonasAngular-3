import { Component, ElementRef, ViewChild } from '@angular/core';
import { LoggingService } from '../LoggingService.service';
import { Persona } from '../persona.model';
import { PersonasService } from '../personas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
  
})
export class FormularioComponent {
  // @Output() personaCreada = new EventEmitter<Persona>();
// Two way binding

  // nombreI: string = '';
  // apellidoI: string = '';

  // agregarPersona() {
  //   let personan = new Persona( this.nombreI, this.apellidoI )

  //   this.personaCreada.emit(personan);
  // }


//Local Ref

  // agregarPersona( nombreInput: HTMLInputElement, apellidoInput: HTMLInputElement ) {
  //   let personan = new Persona( nombreInput.value, apellidoInput.value )

  //   this.personaCreada.emit(personan);
  // }


  //ViewChild + Local Ref
  @ViewChild('nombreInput') nombreInput: ElementRef;
  @ViewChild('apellidoInput') apellidoInput: ElementRef;

  constructor( private loggingService: LoggingService,
               private personasService: PersonasService ) {

  }



  agregarPersona( ) {
    let personan = new Persona( this.nombreInput.nativeElement.value, this.apellidoInput.nativeElement.value )
   //  this.loggingService.mensajeAconsola( 'Muestra Persona ' + 'nombre: ' +  personan.nombre + ' apellido: ' +  personan.apellido )
    // this.personaCreada.emit(personan);
    this.personasService.agregarPersona(personan);
  }

}
