import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  template: `
    <footer>
      <div class="socials">
        <a href="#"><i data-feather="instagram"></i></a>
        <a href="#"><i data-feather="twitter"></i></a>
        <a href="#"><i data-feather="facebook"></i></a>
      </div>

      <div class="links">
        <a href="#home">Home</a>
        <a href="#about">Tentang Kami</a>
        <a href="#menu">produk</a>
        <a href="#swalayan">Daftar Swalayan</a>
        <a href="#contact">Kontak</a>
      </div>

      <div class="credit">
        <p>Created by <a href="">Hera Rempah</a>. | &copy; 2024.</p>
      </div>
    </footer>
  `,
  styleUrl: './footer.component.css',
})
export class FooterComponent {}
