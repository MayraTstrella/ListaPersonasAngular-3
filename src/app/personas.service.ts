import { Injectable } from "@angular/core";
import { LoggingService } from "./LoggingService.service";
import { Persona } from "./persona.model";

@Injectable()
export class PersonasService {

    personas: Persona[] = [new Persona ('Mayra', 'Torres'), new Persona('Magali', 'Baldez')];


    constructor( private loggingService: LoggingService) {

    }

    agregarPersona(persona: Persona) {
        this.loggingService.mensajeAconsola("Agrego persona: " + persona.nombre);
        this.personas.push( persona );
        
      }
}