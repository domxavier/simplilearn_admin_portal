import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { CompanyService } from './../services/company.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit {

  companyRef = new FormGroup({
    id : new FormControl(),
    name : new FormControl()
  })
  formSubmit : boolean = false;

  constructor(public companyService : CompanyService, private router : Router) { }

  ngOnInit(): void {
  }

  storeCompany() : void {
    
    this.companyService.addCompany(this.companyRef.value).subscribe(
      data => console.log(data),
      e => console.log(e),
      () => {
        this.companyRef.reset();
        this.formSubmit = true;
        this.router.navigate(['/companies-list']);
      }
    )
  }


}
