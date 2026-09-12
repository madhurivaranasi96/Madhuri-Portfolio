import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar implements OnInit {

  isLightTheme = false;

  ngOnInit(): void {
    this.isLightTheme = localStorage.getItem('portfolio-theme') === 'light';
    this.applyTheme();
  }

  toggleTheme(): void {
    this.isLightTheme = !this.isLightTheme;
    localStorage.setItem('portfolio-theme', this.isLightTheme ? 'light' : 'dark');
    this.applyTheme();
  }

  private applyTheme(): void {
    document.body.classList.toggle('light-theme', this.isLightTheme);
  }

  scrollToSection(sectionId: string): void {

    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }

  }

}