import { Injectable } from '@angular/core';
import { MenuListing } from './menu-listing';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  url = 'http://localhost:3000/locations';
  constructor() {}

  async getAllMenuListings(): Promise<MenuListing[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }

  async getMenuListingById(id: Number): Promise<MenuListing | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return (await data.json()) ?? {};
  }
  submitApplication(
    nama: string,
    jenis: string,
    // quantity: number,
    alamat: string,
    tglkirim: string
    // total: number
  ) {
    console.log(
      `Ada pesanan masuk Nama: ${nama}, jenis: ${jenis},  alamat: ${alamat}, tanggal kirim: ${tglkirim},`
    );
  }
}
