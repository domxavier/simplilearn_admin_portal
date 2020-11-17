import { Company } from './../models/company';
import { CompanyService } from './../services/company.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from './../services/products.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

  id : string;
  the_product : Product = new Product();
  comp : Company = new Company();
  deletecomp : boolean = false;

  constructor(
    public productService : ProductsService,
    public aroute : ActivatedRoute,
    private router : Router,
    private companyService : CompanyService
  ) { }

  ngOnInit(): void {
    this.aroute.params.subscribe(params => {
      this.id = params['id'];
      //console.log("THIS ID - " + this.id);
      this.productService.getProductById(this.id).subscribe(result => {
        this.the_product = result;
        console.log(this.the_product);
        this.companyService.getCompanyById(this.the_product.pcompany).subscribe(data => {
          this.comp = data;
          console.log(this.comp);
        })
      })
    })
  }

  deleteButton() : void {
    this.deletecomp = true;
  }

  noDelete(): void {
    this.deletecomp = false;
  }

  yesDelete() : void {
    this.productService.deleteProductById(this.id).subscribe(
      data => console.log(data),
      e => console.log(e),
      () => {
        this.router.navigate(['/products-list']);
      }
    )
  }

}
