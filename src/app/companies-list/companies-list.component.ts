import { CompanyService } from './../services/company.service';
import { Component, OnInit } from '@angular/core';
import { Company } from '../models/company';

@Component({
  selector: 'app-companies-list',
  templateUrl: './companies-list.component.html',
  styleUrls: ['./companies-list.component.css']
})
export class CompaniesListComponent implements OnInit {

  companies : Company [];

  constructor(public companies_list_service : CompanyService) { }

  ngOnInit(): void {
    this.companies_list_service.getCompanies().subscribe(
      result => this.companies = result,
      e => console.log(e),
      () => console.log(this.companies)
    )
  }

}
