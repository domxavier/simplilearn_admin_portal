import { ProductsService } from './../services/products.service';
import { Product } from './../models/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  products : Product[];

  constructor(public productService : ProductsService) { }

  ngOnInit(): void {
    this.productService.getproducts().subscribe(
      result => this.products = result,
      e => console.log(e),
      () => console.log(this.products)
    )
  }

}
