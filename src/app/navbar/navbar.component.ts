import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  displayMenu = false;

  constructor(private router: Router) {}

  toggleMenu() {
    this.displayMenu = !this.displayMenu;
  }

  navegarParaDepartamentos() {
    this.displayMenu = false;
    this.router.navigate(['/departamentos']);
  }
}
