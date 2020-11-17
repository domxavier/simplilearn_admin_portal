import { Company } from './../models/company';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from './../services/products.service';
import { CompanyService } from './../services/company.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  productRef = new FormGroup({
    pcode : new FormControl(),
    pname : new FormControl(),
    pdetails : new FormControl(),
    pimage : new FormControl(),
    price : new FormControl(),
    pcompany : new FormControl()
  })
  id : string;
  the_prod : Product = new Product();
  companies : Company[] = [];
  the_comp : Company = new Company();

  constructor(
    public companyService : CompanyService,
    private productService : ProductsService,
    public aroute : ActivatedRoute,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.aroute.params.subscribe( params => {
      this.id = params['id'];
      this.productService.getProductById(this.id).subscribe(
        data => this.the_prod = data,
        e => console.log(e),
        () => {
          this.companyService.getCompanyById(this.the_prod.pcompany).subscribe(
            data => this.the_comp = data,
            e => console.log(e),
            () => {
              this.companyService.getCompanies().subscribe(
                data => this.companies = data,
                e => console.log(e),
                () => {
                  console.log(this.the_prod);
                  // console.log(this.the_comp);
                  // console.log(this.companies);
                }
              )
            }
          )
        }
      )
    })
  }

  updateProd() : void {
    if(this.productRef.value.pcode === null) {
      this.productRef.value.pcode = this.the_prod.pcode;
    }
    if(this.productRef.value.pdetails === null) {
      this.productRef.value.pdetails = this.the_prod.pdetails;
    }
    if(this.productRef.value.pname === null) {
      this.productRef.value.pname = this.the_prod.pname;
    }
    if(this.productRef.value.pimage === null) {
      this.productRef.value.pimage = this.the_prod.pimage;
    }
    if(this.productRef.value.price === null) {
      this.productRef.value.price = this.the_prod.price;
    }
    if(this.productRef.value.pcompany === null) {
      this.productRef.value.pcompany = this.the_prod.pcompany;
    } else {
      for(let c of this.companies) {
        if(c.name === this.productRef.value.pcompany) {
          this.productRef.value.pcompany = c._id;
        }
      }
    }

    console.log(this.productRef.value);
    this.productService.updateProductById(this.productRef.value, this.the_prod._id).subscribe(
      data => console.log(data),
      e => console.log(e),
      () => {
        this.router.navigate(['/products-list']);
      }
    )
  }

}
