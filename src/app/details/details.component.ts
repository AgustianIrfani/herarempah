import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuService } from '../menu.service';
import { MenuListing } from '../menu-listing';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <article class="menu section bd-container pesan" id="produk">
      <img class="listing-photo" [src]="menuListing?.photo" />
      <section class="listing-description">
        <h2 class="listing-heading">{{ menuListing?.name }}</h2>
        <p class="listing-location">{{ menuListing?.detail }}</p>
      </section>
      <section class="listing-features">
        <h2 class="section-heading">Tentang produk ini</h2>
        <ul>
          <li>
            <p>{{ menuListing?.info }}</p>
          </li>
          <br />
          <li><strong>Tersedia</strong> : {{ menuListing?.stock }} pcs</li>

          <li><strong>Harga</strong> : Rp.{{ menuListing?.price }}</li>
        </ul>
      </section>
      <section class="listing-apply">
        <h2 class="section-heading">Pesan Sekarang</h2>
        <form [formGroup]="applyForm" (submit)="submitApplication()">
          <label for="nama">Nama</label>
          <input type="text" id="nama" required formControlName="nama" />

          <label for="jenis">Jenis</label>
          <input type="text" id="jenis" formControlName="jenis" />

          <label for="quantity">Quantity</label>
          <input type="number" id="quantity" formControlName="quantity" />

          <label for="alamat">alamat</label>
          <input type="text" id="alamat" required formControlName="alamat" />

          <label for="tanggal">Tanggal kirim</label>
          <input type="date" id="tanggal" formControlName="tglkirim" />

          <label for="total">Total</label>
          <input type="number" id="number" formControlName="total" />

          <button type="submit" class="button">Pesan</button>
          <a class="" href="#menu">Kembali</a>
        </form>
      </section>
    </article>
  `,
  styleUrl: './details.component.css',
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  menuService = inject(MenuService);
  menuListing: MenuListing | undefined;
  applyForm = new FormGroup({
    nama: new FormControl(''),
    jenis: new FormControl(''),
    quantity: new FormControl(''),
    alamat: new FormControl(''),
    tglkirim: new FormControl(''),
    total: new FormControl(''),
  });
  constructor() {
    const menuListingId = Number(this.route.snapshot.params['id']);
    this.menuService.getMenuListingById(menuListingId).then((menuListing) => {
      this.menuListing = menuListing;
    });
  }

  submitApplication() {
    this.menuService.submitApplication(
      this.applyForm.value.nama ?? '',
      this.applyForm.value.jenis ?? '',
      // this.applyForm.value.quantity ?? '',
      this.applyForm.value.alamat ?? '',
      this.applyForm.value.tglkirim ?? ''
      // this.applyForm.value.total ?? ''
    );
  }
}
