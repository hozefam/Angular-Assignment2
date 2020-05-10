import { IProduct } from './iproduct';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  productList: IProduct[];
  searchQuantity: number;
  showImages = true;

  ngOnInit(): void {
    this.loadProducts();
  }

  showImage(event, imageUrl) {
    event.target.src = 'assets/images/' + imageUrl;
  }

  toggleImage() {
    this.showImages = !this.showImages;
  }

  loadProducts() {
    this.productList = [
      {
        fimageUrl: 'T1-Front.jpg',
        bimageUrl: 'T1-Back.jpg',
        name: 'Arsenal Jersey',
        price: 100,
        quantity: 120,
      },
      {
        fimageUrl: 'T2-Front.jpg',
        bimageUrl: 'T2-Back.jpg',
        name: 'Germany Jersey',
        price: 200,
        quantity: 40,
      },
      {
        fimageUrl: 'T3-Front.jpg',
        bimageUrl: 'T3-Back.jpg',
        name: 'Chelsea Jersey',
        price: 150,
        quantity: 20,
      },
      {
        fimageUrl: 'T4-Front.jpg',
        bimageUrl: 'T4-Back.jpg',
        name: 'Chivas Home Jersey',
        price: 199,
        quantity: 200,
      },
      {
        fimageUrl: 'T5-Front.jpg',
        bimageUrl: 'T5-Back.jpg',
        name: 'FC Barcelona',
        price: 130,
        quantity: 125,
      },
    ];
  }
}
