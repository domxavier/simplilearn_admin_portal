import { ActivatedRoute, Router } from '@angular/router';
import { CompanyService } from './../services/company.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-company',
  templateUrl: './view-company.component.html',
  styleUrls: ['./view-company.component.css']
})
export class ViewCompanyComponent implements OnInit {

  name : string;
  id : string;
  deletecomp : boolean = false;

  constructor(
              public companyService : CompanyService,
              public aroute : ActivatedRoute,
              private router : Router
            ) { }

  ngOnInit(): void {
    this.aroute.params.subscribe(params => {
      this.id = params['id'];
      this.name = params['name']
      
    })
  }

  deleteButton() : void {
    this.deletecomp = true;
  }

  noDelete(): void {
    this.deletecomp = false;
  }

  yesDelete() : void {
    this.companyService.deleteCompanyById(this.id).subscribe(
      data => console.log(data),
      e => console.log(e),
      () => {
        this.router.navigate(['/companies-list']);
      }
    )
  }

}
