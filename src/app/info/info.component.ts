import { Component } from '@angular/core';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [],
  template: `
    <div id="swalayan">
      <span
        class="section-subtitle contact__initial"
        style="text-align: center; justify-content: center; margin-top: 50px; font-size: 30px;"
        >DAFTAR SWALAYAN</span
      >
      <h2
        class="section-title contact__initial"
        style="text-align: center; justify-content: center; margin-top: 30px;"
      >
        Anda juga dapat menemukan produk kami di
      </h2>
      <div class="market">
        <div class="market-mall">
          <strong>Gloria Swalayan Medan </strong> <br /><br />
          <a href="https://maps.app.goo.gl/ZizxfGdGVJA475Us9" target="_blank"
            >lokasi</a
          >
          <br />
          <br />
        </div>

        <div class="market-mall">
          <strong>Pondok Indah Pasar Buah</strong><br /><br />
          <a href="https://maps.app.goo.gl/ijCrsegp61hmhZEbA" target="_blank"
            ><strong>lokasi</strong></a
          >
          <br />
          <br />
        </div>

        <div class="market-mall">
          <strong>Palangkaraya Semimart</strong><br /><br />
          <a href="https://maps.app.goo.gl/JLygga5w9xwMg9hb8" target="_blank"
            ><strong>lokasi</strong></a
          >
          <br />
          <br />
        </div>

        <div class="market-mall">
          <strong>Kemang Indah Pasar Buah</strong><br /><br />
          <a href="https://maps.app.goo.gl/vGUfmgz5DqCMTn9j9" target="_blank"
            ><strong>lokasi</strong></a
          >
          <br />
          <br />
        </div>

        <div class="market-mall">
          <strong>Cemara Asri Pasar Buah</strong><br /><br />
          <a href="https://maps.app.goo.gl/6JnGcyUmmWjkRWNm6" target="_blank"
            ><strong>lokasi</strong></a
          >
          <br />
          <br />
        </div>

        <div class="market-mall">
          <strong>Smarco</strong><br /><br />
          <a href="https://maps.app.goo.gl/6C7Mc3H1gdxBZSzS8" target="_blank"
            ><strong>lokasi</strong></a
          >
          <br />
          <br />
        </div>

        <div class="market-mall">
          <strong>Irama Housewere</strong><br /><br />
          <a href="https://maps.app.goo.gl/EuD139shhT23gWXw6" target="_blank"
            ><strong>lokasi</strong></a
          >
          <br />
          <br />
        </div>

        <div class="market-mall">
          <strong>Asiaking's Binjai</strong><br /><br />
          <a href="https://maps.app.goo.gl/LtNThiPyBC5ZsLxx6" target="_blank"
            ><strong>lokasi</strong></a
          >
          <br />
          <br />
        </div>
      </div>
    </div>

    <section class="contact section bd-container" id="contact">
      <div class="contact__container bd-grid">
        <div class="contact__data">
          <span class="section-subtitle contact__initial">KONTAK</span>
          <h2 class="section-title contact__initial">Hubungi Kami</h2>
          <p class="contact__description">
            Untuk informasi lebih lanjut, anda dapat menghubungi social media
            kami di bawah ini<br /><br />
          </p>
          <a
            href="https://www.instagram.com/herarempah?igsh=MjB0eGI4Z3A3Y3g3"
            class="footer__social"
            ><i class="bx bxl-instagram"></i
          ></a>
          <a href="mailto:whera097@gmail.com?" class="footer__social"
            ><i class="bx bx-envelope"></i
          ></a>
          <a href="https://wa.me/6282367526080" class="footer__social"
            ><i class="bx bxl-whatsapp"></i></a
          ><br /><br />
          <h3 class="footer__title">Alamat Kami</h3>
          <ul>
            <li>Perumahan safira patumbak Jl. Sedap Malam, Deli Tua Barat</li>
            <li>Kecamatan Deli Tua, Kabupaten Deli Serdang, 20361</li>
            <li>Sumatera Utara</li>
            <!-- <li>
              <br />
              <a [href]="'mailto:whera097@gmail.com'" style="color: #fff;"
                >email hera</a
              >
            </li> -->
          </ul>
        </div>

        <div class="contact__button" style="display: none;">
          <a href="#" class="button" id="toggle-map">Tampilkan Maps</a>
        </div>
        <div id="map-container"></div>
      </div>
    </section>
  `,
  styleUrl: './info.component.css',
})
export class InfoComponent {}
