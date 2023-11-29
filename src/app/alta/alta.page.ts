import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { NavController } from '@ionic/angular';  // Asegúrate de importar NavController

@Component({
  selector: 'app-alta',
  templateUrl: 'alta.page.html',
  styleUrls: ['alta.page.scss'],
})
export class AltaPage {
  nuevoElemento: {
    nombre: string,
    apellido: string,
    fechaNacimiento: string,
    ciudad: string,
    sexo: string,
    telefono: string,
    fotos: FileList | null  // Corregir la definición de fotos
  } = {
    nombre: '',
    apellido: '',
    fechaNacimiento: '',
    ciudad: '',
    sexo: '',
    telefono: '',
    fotos: null
  };

  constructor(
    private alertController: AlertController,
    private router: Router,
    private dataService: DataService,
    private navCtrl: NavController
  ) {}

  onFileChange(event: any) {  // Corregir el tipo de event
    this.nuevoElemento.fotos = event.target.files;
  }

  async agregarElemento() {
    if (this.nuevoElemento.nombre.trim() !== '') {
      // Agregar lógica para manejar las fotos aquí

      this.dataService.agregarElemento(this.nuevoElemento);

      const alert = await this.alertController.create({
        header: 'Éxito',
        message: 'Elemento agregado correctamente.',
        buttons: ['OK'],
      });

      await alert.present();

      this.nuevoElemento = {
        nombre: '',
        apellido: '',
        fechaNacimiento: '',
        ciudad: '',
        sexo: '',
        telefono: '',
        fotos: null
      };
    }
  }

  verLista() {
    this.router.navigate(['/lista']);
  }

  irAGaleria() {
    this.navCtrl.navigateForward(['/galeria']);
  }
}
