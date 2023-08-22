import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  constructor() { }

  ngOnInit(): void {
    this.navbarShrink();
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    this.navbarShrink();
  }

  navbarShrink(): void {
    const navbarCollapsible = document.body.querySelector('#mainNav');
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove('navbar-shrink');
    } else {
      navbarCollapsible.classList.add('navbar-shrink');
    }
  }
  onMenuItemClick(option: string) {
    console.log('Option selected:', option);
    // Ajoutez ici le code à exécuter lorsque l'option du menu est sélectionnée.
  }
  goToDashboard() {
    // Ajoutez ici la logique de navigation vers le tableau de bord.
  }

  editProfile() {
    // Ajoutez ici la logique pour éditer le profil de l'utilisateur.
  }

  logOut() {
    // Ajoutez ici la logique pour se déconnecter.
  }

}
