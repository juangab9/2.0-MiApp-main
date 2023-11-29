import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-lista',
  templateUrl: 'lista.page.html',
  styleUrls: ['lista.page.scss'],
})
export class ListaPage {
  elementos: {
    nombre: string,
    apellido: string,
    fechaNacimiento: string,
    ciudad: string,
    sexo: string,
    telefono: string,
    fotos: FileList | null
  }[] = [];

  constructor(private dataService: DataService) {}

  ionViewWillEnter() {
    this.elementos = this.dataService.obtenerElementos();
  }
}
