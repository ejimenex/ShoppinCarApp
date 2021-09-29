import { Component, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { AlertService } from "../../../service/alert-sweet.service";
import { Router, ActivatedRoute } from "@angular/router";
import {ProductService } from "../../../service/product.service";

import {Product} from '../../../model/invoice/product';
import { CustomerService } from "../../../service/customer.service";
import { Customer } from "../../../model/customer.model";

@Component({
  templateUrl: "./customer-create.component.html",
})
export class CustomerAddComponent implements OnInit {
  customer: Customer=new Customer();

  constructor(
    private router: Router,
    private alertService: AlertService,
    private customerService: CustomerService
  ) {}

  ngOnInit() {
  }

  
  save() {
    this.customerService.post(this.customer).subscribe(
      (response) => {
        this.router.navigate(["/customer"]);
        this.alertService.success("Cliente registrado correctamente");
      },
      (error) => {
        this.alertService.error(error.error);
      }
    );
  }
}
