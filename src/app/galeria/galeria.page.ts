import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-galeria',
  templateUrl: 'galeria.page.html',
  styleUrls: ['galeria.page.scss'],
})
export class GaleriaPage {
  imagenes: { url: string, descripcion: string }[] = [];

  constructor(private dataService: DataService) {}

  ionViewWillEnter() {
    this.imagenes = this.dataService.obtenerImagenes();
  }
}
