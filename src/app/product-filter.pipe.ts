import { IProduct } from './iproduct';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productFilter',
})
export class ProductFilterPipe implements PipeTransform {
  transform(value: IProduct[], args: number): IProduct[] {
    console.log(args);
    if (!args) {
      return value;
    }

    return value.filter((item) => item.price >= args);
  }
}
