import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css']
})
export class ProductTableComponent implements OnInit {
  public _products = [];
  public categories = [];
  public productList = {};
  public _isDisplayProdcutsInStockChecked: boolean;
  public _searchedProducts = [];
  @Input()
  set products(receivedProducts: any) {
    this._products = receivedProducts;
  }
  @Input() set isDisplayProdcutsInStockChecked(isChecked: boolean) {
    this._isDisplayProdcutsInStockChecked = isChecked;
  }
  @Input() set searchedProducts(filteredProdcuts: any) {
    this._searchedProducts = filteredProdcuts;
  }

  constructor() { }

  ngOnInit(): void {
   this.findNumberOfCategories();
  }

  ngOnChanges() {
    this.findNumberOfCategories();
  }

  findNumberOfCategories() {
    let lastCategory = null;
    this.categories = [];
    let temp_products = this.checkAndSetProducts();
    temp_products.forEach((product) => {
      if(product.category !== lastCategory) {
        this.categories.push(product.category);
        lastCategory = product.category
      }
    });
    this.groupProducts();
  }

  groupProducts() {
    let temp_products = this.checkAndSetProducts();
    for(let i=0; i<this.categories.length; i++) {
      let temp = [];
      temp_products.forEach((product) => {
        if(product.category === this.categories[i]) {
          temp.push(product);
          if(this._isDisplayProdcutsInStockChecked) {
            product.stocked ? '' : temp.pop();
          }
        }
      });
      this.productList[this.categories[i]] = temp;
    }
  }

  checkAndSetProducts() {
    let products;
    if(this._searchedProducts && this._searchedProducts.length > 0) {
      products = this._searchedProducts;
    } else {
      products = this._products;
    }
    return products;
  }

}
