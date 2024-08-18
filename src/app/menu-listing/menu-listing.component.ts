import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuListing } from '../menu-listing';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu-listing',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="menu__content" href="#produk">
      <img
        class="menu__img"
        [src]="menuListing.photo"
        alt="Exterior photo of {{ menuListing.name }}"
      />
      <h3 class="menu__name">{{ menuListing.name }}</h3>
      <p class="menu__detail">{{ menuListing.detail }}</p>
      <p class="menu__preci">Rp.{{ menuListing.price }}</p>
      <p class="menu__preci">Tersedia {{ menuListing.stock }} pcs</p>
      <a
        href="#produk"
        class="button menu__button__left"
        [routerLink]="['/details', menuListing.id]"
      >
        Pesan
      </a>
      <!-- <button
        onclick="showForm(event, 'Pala', '5000')"
        class="button menu__button__left"
      >
        BELI
      </button> -->
    </div>
  `,
  styleUrl: './menu-listing.component.css',
})
export class MenuListingComponent {
  @Input() menuListing!: MenuListing;
  nuListing!: MenuListing;
}
