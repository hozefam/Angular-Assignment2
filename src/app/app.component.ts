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
        fimageUrl: 'T2-Front.jpeg',
        bimageUrl: 'T2-Back.jpeg',
        name: 'Germany Jersey',
        price: 200,
        quantity: 40,
      },
      {
        fimageUrl: 'T3-Front.jpeg',
        bimageUrl: 'T3-Back.jpeg',
        name: 'Chelsea Jersey',
        price: 150,
        quantity: 20,
      },
      {
        fimageUrl: 'T4-Front.jpeg',
        bimageUrl: 'T4-Back.jpeg',
        name: 'Chivas Home Jersey',
        price: 199,
        quantity: 200,
      },
      {
        fimageUrl: 'T5-Front.jpeg',
        bimageUrl: 'T5-Back.jpeg',
        name: 'FC Barcelona',
        price: 130,
        quantity: 125,
      },
    ];
  }
}
