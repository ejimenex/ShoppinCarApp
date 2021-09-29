import { Component, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { AlertService } from "../../../service/alert-sweet.service";
import { Router, ActivatedRoute } from "@angular/router";
import {ProductService } from "../../../service/product.service";

import {Product} from '../../../model/invoice/product';

@Component({
  templateUrl: "./product-create.component.html",
})
export class ProductAddComponent implements OnInit {
  product: Product=new Product();

  constructor(
    private router: Router,
    private alertService: AlertService,
    private productService: ProductService
  ) {}

  ngOnInit() {
  }

  validateRequidesFileds() {
    let result = !this.product.name || !this.product.price;
    return result;
  }
  
  save() {
    if (this.validateRequidesFileds())
      return this.alertService.error("Verificar campos requeridos", "Error");
    this.productService.post(this.product).subscribe(
      (response) => {
        this.router.navigate(["/product"]);
        this.alertService.success("Producto registrado correctamente");
      },
      (error) => {
        this.alertService.error(error.error);
      }
    );
  }
}
