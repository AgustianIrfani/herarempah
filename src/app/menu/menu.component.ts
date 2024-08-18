import { Component, inject } from '@angular/core';
import { MenuListingComponent } from '../menu-listing/menu-listing.component';
import { CommonModule } from '@angular/common';
import { MenuListing } from '../menu-listing';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, MenuListingComponent],
  template: `
    <!--========== MENU ==========-->
    <section class="menu section bd-container" id="menu">
      <span class="section-subtitle">Produk</span>
      <h2 class="section-title">Aneka bumbu rempah</h2>
      <form (submit)="filterResults(filter.value); $event.preventDefault()">
        <input
          type="text"
          placeholder="Cari Produk"
          #filter
          (keyup.enter)="filterResults(filter.value)"
        />
        <button
          class="primary"
          type="button"
          (click)="filterResults(filter.value)"
        >
          Search
        </button>
      </form>
      <div class="menu__container bd-grid">
        <app-menu-listing
          *ngFor="let menuListing of filteredLocationList"
          [menuListing]="menuListing"
        ></app-menu-listing>
      </div>
    </section>
  `,
  styleUrl: './menu.component.css',
})
export class MenuComponent {
  menuListingList: MenuListing[] = [];
  menuService: MenuService = inject(MenuService);
  filteredLocationList: MenuListing[] = [];
  constructor() {
    this.menuService
      .getAllMenuListings()
      .then((menuListingList: MenuListing[]) => {
        this.menuListingList = menuListingList;
        this.filteredLocationList = menuListingList;
      });
  }
  filterResults(text: string) {
    if (!text) this.filteredLocationList = this.menuListingList;

    this.filteredLocationList = this.menuListingList.filter((menuListing) =>
      menuListing?.name.toLowerCase().includes(text.toLowerCase())
    );
  }
}
