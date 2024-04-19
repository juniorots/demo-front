import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { MsalService } from '@azure/msal-angular';
import { AuthenticationResult } from '@azure/msal-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'demo-front';
  result: any;

  constructor(
    private api: ApiService,
    private authService: MsalService
  ) {
    //this.getDatas(); - PARA O CASO DE VALIDACAO DO LDAP DO SPRING
  }

  login() {
    this.authService.loginPopup().subscribe((response: AuthenticationResult) => {
      this.authService.instance.setActiveAccount(response.account);
    });
  }

  logout() {
    this.authService.logout();
  }

  getDatas(): void {
    this.api.getResource().subscribe({
      next: obj => {
        this.result = obj;
      },
      error: err => {
        console.error(`Error: ${err}`);
      }
    });
  }
}
