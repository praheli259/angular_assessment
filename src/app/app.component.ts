import { Component } from '@angular/core';
import { products } from './products';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mock-ui';
  public products = products;
  public searchedProducts;
  public isDisplayProdcutsInStockChecked: boolean;

  displayInStockProducts(isChecked: boolean) {
    this.isDisplayProdcutsInStockChecked = isChecked;
  }

  getSearchedProducts(searchedProducts: any) {
    this.searchedProducts = searchedProducts;
  }
}
