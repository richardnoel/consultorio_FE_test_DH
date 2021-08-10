import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ProductsService } from './../../../core/services/products/products.service';
import { Product } from './../../../core/models/product.model';
import { Doctor } from 'src/app/core/models/doctor.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Product;
  doctor: Doctor;
  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      // this.product = this.productsService.getProduct(id);
      this.fetchDoctor(id);
    });
  }
  
  fetchDoctor(id:string){
    this.productsService.getDoctor(id).subscribe(doctor => {
    });
  }

}
