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
        fimageUrl: 'https://ibb.co/L61Jtpf',
        bimageUrl: 'https://ibb.co/L8LPBMF',
        name: 'Arsenal Jersey',
        price: 100,
        quantity: 120,
      },
      {
        fimageUrl: 'https://ibb.co/XVGjZz3',
        bimageUrl: 'https://ibb.co/7CKRH3c',
        name: 'Germany Jersey',
        price: 200,
        quantity: 40,
      },
      {
        fimageUrl: 'https://ibb.co/4sQGrPg',
        bimageUrl: 'https://ibb.co/RBrFGF8',
        name: 'Chelsea Jersey',
        price: 150,
        quantity: 20,
      },
      {
        fimageUrl: 'https://ibb.co/SBXd3gk',
        bimageUrl: 'https://ibb.co/yPmx94K',
        name: 'Chivas Home Jersey',
        price: 199,
        quantity: 200,
      },
      {
        fimageUrl: 'https://ibb.co/7SpkLtX',
        bimageUrl: 'https://ibb.co/jw4pQDC',
        name: 'FC Barcelona',
        price: 130,
        quantity: 125,
      },
    ];
  }
}
