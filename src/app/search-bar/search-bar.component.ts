import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  @Input() products;
  @Output() displayInStockProducts = new EventEmitter<boolean>();
  @Output() searchedProducts = new EventEmitter<any>();

  public displayProductsInStock: boolean = false;
  public searchedText: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onChange(event) {
    if(event.target.checked) {
      this.displayProductsInStock = true;
    } else {
      this.displayProductsInStock = false;
    }
    this.displayInStockProducts.emit(this.displayProductsInStock);
  }

  getSearchedText() {
    let temp = [];
    temp = this.products.filter((product) => product.name.toLowerCase().includes(this.searchedText.toLowerCase()));
    this.searchedProducts.emit(temp);
  }

}
