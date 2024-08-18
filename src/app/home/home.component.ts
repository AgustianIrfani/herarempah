import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
    <main class="l-main">
      <!--========== HOME ==========-->
      <section class="home" id="home">
        <div class="home__container bd-container bd-grid">
          <div class="home__data">
            <!-- <h1 class="home__title">Uenak</h1> -->
            <h2 class="home__subtitle">
              "Kelezatan alami yang tersegel: Rempah dalam kemasan, Kesegaran
              untuk hidangan sempurna." <br />
            </h2>
            <a href="#menu" class="button">Lihat Produk</a>
          </div>

          <img src="/assets/home.jpg" alt="" class="home__img" />
        </div>
      </section>
    </main>
  `,
  styleUrl: './home.component.css',
})
export class HomeComponent {}
