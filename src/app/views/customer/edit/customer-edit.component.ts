import { Component, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { AlertService } from "../../../service/alert-sweet.service";
import { Router, ActivatedRoute } from "@angular/router";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CustomerService } from "../../../service/customer.service";
import { Customer } from "../../../model/customer.model";



@Component({
  selector: 'edit-customer-app',
  templateUrl: './customer-edit.component.html'
})
export class EditCustomerComponent implements OnInit {
  customer: Customer = new Customer();
  unitOfMeasure = [];
  productType = [];
  id: string


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private alertService: AlertService,
    private customerService: CustomerService,
    private _modalService: NgbModal
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id")
    this.onLoad();
  }

  validateRequidesFileds() {
    let result = !this.customer.name || !this.customer.lastName || !this.customer.email || !this.customer.password;
    return result;
  }
  async onLoad() {

    this.customer= await  this.customerService.getByGuid(this.id).toPromise();
  }

  save() {
    this.alertService.question(() => { this.edit() }, 'Confirmación', 'Seguro desea modificar')
  }
  edit() {
    if (this.validateRequidesFileds())
      return this.alertService.error("Verificar campos requeridos", "Error");
    this.customerService.put(0, this.customer).subscribe(
      (response) => {
        this.router.navigate(["/customer"]);
        this.alertService.success("Cliente editado correctamente");
      },
      (error) => {
        this.alertService.error(error.error);
      }
    );
  }
}
