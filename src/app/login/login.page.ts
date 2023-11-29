// login.page.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {
  usuario: string = '';
  contrasena: string = '';

  constructor(private router: Router) {}

  autenticar() {
    // Lógica de autenticación simulada
    const credencialesCorrectas = this.usuario.toLowerCase() === 'admin' && this.contrasena === 'admin';

    if (credencialesCorrectas) {
      console.log('Autenticado con éxito');
      // Navegar a la página 'alta' después de la autenticación
      this.router.navigate(['/alta']);
    } else {
      console.error('Autenticación fallida');
    }
  }
}

