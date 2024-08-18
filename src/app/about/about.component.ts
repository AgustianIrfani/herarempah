import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  template: `
    <!--========== ABOUT ==========-->
    <section class="about section bd-container" id="about">
      <div class="about__container bd-grid">
        <div class="about__data">
          <span class="section-subtitle about__initial">Tentang Kami</span>
          <h2 class="section-title about__initial">
            SEKILAS TENTANG Hera Rempah
          </h2>
          <p id="about-paragraph" class="about__description">
            "Hera Rempah: Kelezatan Alam yang Tersegel! Diperkaya dengan
            rempah-rempah alami," Hera Rempah hadir dalam kemasan yang praktis
            dan higienis. Dengan izin edar yang terjamin, Hera Rempah menjadi
            pilihan sempurna untuk menghadirkan cita rasa autentik dalam masakan
            Anda.
          </p>
          <!-- <a href="#" class="button" id="read-more-button">Selengkapnya</a> -->
        </div>
        <img
          id="slider-imagee"
          src="assets/about1.jpg"
          alt=""
          class="about__img"
        />
      </div>
    </section>
  `,
  styleUrl: './about.component.css',
})
export class AboutComponent {}
