import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from "../models/product";

const httpOptions = {
  headers : new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private productUrl = 'http://localhost:5000/api/products';
  constructor(private http : HttpClient) { }

  getproducts() : Observable<Product[]> {
    return this.http.get<Product[]>(this.productUrl);
  }

}
