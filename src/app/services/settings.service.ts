import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  private linkTheme = document.querySelector('#theme')!;

  constructor() {
    const url =
      localStorage.getItem('theme') || './assets/css/colors/default-dark.css';

    this.linkTheme.setAttribute('href', url);
  }

  changeTheme(theme: string) {
    const url = `./assets/css/colors/${theme}.css`;

    this.linkTheme.setAttribute('href', url);
    localStorage.setItem('theme', url);

    this.checkCurrentTheme();
  }

  checkCurrentTheme() {
    const links = document.querySelectorAll('.selector');

    links.forEach((link) => {
      link.classList.remove('working');
      const btn = link.getAttribute('data-theme');
      const btnUrl = `./assets/css/colors/${btn}.css`;
      const currentThemme = this.linkTheme.getAttribute('href');

      if (btnUrl === currentThemme) {
        link.classList.add('working');
      }
    });
  }
}
