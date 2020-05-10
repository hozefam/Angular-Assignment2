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
        fimageUrl: 'https://imgur.com/tz4d9P7.jpg',
        bimageUrl: 'https://imgur.com/vBRlM9T.jpg',
        name: 'Arsenal Jersey',
        price: 100,
        quantity: 120,
      },
      {
        fimageUrl: 'https://imgur.com/TMt5BoW.jpg',
        bimageUrl: 'https://imgur.com/bqG2q6R.jpg',
        name: 'Germany Jersey',
        price: 200,
        quantity: 40,
      },
      {
        fimageUrl: 'https://imgur.com/BVGHyvn.jpg',
        bimageUrl: 'https://imgur.com/76Iy9vC.jpg',
        name: 'Chelsea Jersey',
        price: 150,
        quantity: 20,
      },
      {
        fimageUrl: 'https://imgur.com/BAL30pU.jpg',
        bimageUrl: 'https://imgur.com/g0M10K2.jpg',
        name: 'Chivas Home Jersey',
        price: 199,
        quantity: 200,
      },
      {
        fimageUrl: 'https://imgur.com/jOA157F.jpg',
        bimageUrl: 'https://imgur.com/hTRm5KF.jpg',
        name: 'FC Barcelona',
        price: 130,
        quantity: 125,
      },
    ];
  }
}
