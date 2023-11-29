import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private elementos: {
    nombre: string,
    apellido: string,
    fechaNacimiento: string,
    ciudad: string,
    sexo: string,
    telefono: string,
    fotos: FileList | null
  }[] = [];

  agregarElemento(elemento: any) {
    this.elementos.push(elemento);
  }

  obtenerElementos() {
    return this.elementos;
  }

  obtenerImagenes(): { url: string, descripcion: string }[] {
    return this.elementos
      .filter(elemento => elemento.fotos !== null && elemento.fotos !== undefined)
      .map(elemento => ({
        url: elemento.fotos ? URL.createObjectURL(elemento.fotos[0]) : '',
        descripcion: `Foto de ${elemento.nombre}`
      }));
  }
}
