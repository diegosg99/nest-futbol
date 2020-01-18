import { Injectable } from '@nestjs/common';

@Injectable()
export class PlayerException { 
    constructor() {}
  notFound(): String {
    throw "ERROR: Usuario no encontrado.";
  }
  incorrectData(): String {
    throw "ERROR: Los parametros para la actualización no son aceptados por el esquema de base de datos.";
  }
  serverError(): String {
    throw "ERROR: Fallo del funcionamiento interno del servidor.";
  }
}