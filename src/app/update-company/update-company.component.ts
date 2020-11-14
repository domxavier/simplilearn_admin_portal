import { ActivatedRoute } from '@angular/router';
import { CompanyService } from './../services/company.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-company',
  templateUrl: './update-company.component.html',
  styleUrls: ['./update-company.component.css']
})
export class UpdateCompanyComponent implements OnInit {
  
  companyRef = new FormGroup({
    id : new FormControl(),
    name : new FormControl()
  })
  currentName : string;
  currentId : string;
  formSubmit : boolean = false;
  

  constructor(public companyService : CompanyService, public aroute : ActivatedRoute) { }

  ngOnInit(): void {
    this.aroute.params.subscribe( params => {
      this.currentName = params['name'];
      this.currentId = params['id'];
    })
  }

  updateCompany() : void {
    this.companyService.updateCompanyById(this.companyRef.value, this.currentId).subscribe(
      data => console.log(data),
      e => console.log(e),
      () => {
        this.currentName = this.companyRef.value.name;
        this.companyRef.reset();
        this.formSubmit = true;
      }
    )
  }

}
