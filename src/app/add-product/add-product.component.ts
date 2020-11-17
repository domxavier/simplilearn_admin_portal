import { CompanyService } from './../services/company.service';
import { Router } from '@angular/router';
import { ProductsService } from './../services/products.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Company } from '../models/company';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  productRef = new FormGroup({
    pcode : new FormControl(),
    pname : new FormControl(),
    pdetails : new FormControl(),
    pimage : new FormControl(),
    price : new FormControl(),
    pcompany : new FormControl()
  })
  formSubmit : boolean = false;
  companies : Company[] = [];

  constructor(
    public productService : ProductsService,
    public router : Router,
    public companyService : CompanyService 
  ) { }

  ngOnInit(): void {
    this.companyService.getCompanies().subscribe(
      result => this.companies = result,
      e => console.log(e),
      () => {
        console.log(this.companies);
      }
    )
  }

  storeProduct() : void {
    for(let c of this.companies) {
      if(c.name === this.productRef.value.pcompany) {
        this.productRef.value.pcompany = c._id;
      }
    }
    this.productService.addProduct(this.productRef.value).subscribe(
      data => console.log(data),
      e => console.log(e),
      () => {
        this.productRef.reset();
        this.formSubmit = true;
        this.router.navigate(['/products-list']);
      }
    )
  }

  

}
