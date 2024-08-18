import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { InfoComponent } from './info/info.component';
import { FooterComponent } from './footer/footer.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HomeComponent,
    AboutComponent,
    MenuComponent,
    RouterModule,
    FooterComponent,
    InfoComponent,
  ],
  template: `
    <!-- HEADER -->
    <header class="l-header" id="header">
      <nav class="nav bd-container">
        <a href="#" class="nav__logo">Hera Rempah</a>

        <div class="nav__menu" id="nav-menu">
          <ul class="nav__list">
            <li class="nav__item">
              <a href="#home" class="nav__link active-link">Home</a>
            </li>
            <li class="nav__item">
              <a href="#about" class="nav__link">Tentang Kami</a>
            </li>
            <li class="nav__item">
              <a href="#menu" class="nav__link">Produk</a>
            </li>
            <li class="nav__item">
              <a href="#swalayan" class="nav__link">Daftar Swalayan</a>
            </li>
            <li class="nav__item">
              <a href="#contact" class="nav__link">kontak</a>
            </li>
          </ul>
        </div>
        <!-- <i class="bx bx-moon change-theme" id="theme-button"></i> -->
        <div class="nav__toggle" id="nav-toggle">
          <i class="bx bx-menu"></i>
        </div>
      </nav>
    </header>
    <section class="content">
      <app-home></app-home>
    </section>
    <section class="content">
      <app-about></app-about>
    </section>
    <section class="content">
      <router-outlet></router-outlet>
    </section>
    <section>
      <app-info></app-info>
    </section>
    <section>
      <app-footer></app-footer>
    </section>
  `,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'herarempah';
}
