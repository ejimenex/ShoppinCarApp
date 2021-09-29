import { Component, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { Router } from "@angular/router";
import { AlertService } from "../../../service/alert-sweet.service";
import { ProductService } from "../../../service/product.service";
import { config } from "../../../constant/param";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { CustomerService } from "../../../service/customer.service";

@Component({
  templateUrl: "./customer-list.component.html",
  styleUrls: ["./../../../views/table.css"],
})
export class CustomerListComponent implements OnInit {
  customer = [];
  filter: any = {};
  dataPage = {};
  doctorId = 0;
  page: number = 0;
  constructor(
    private router: Router,
    private alert: AlertService,
    private _modalService: NgbModal,
    private cutomerService: CustomerService
  ) {}
  ngOnInit() {
    this.getAll();
  }
  openEditView(id: string) {
    this.router.navigate(["customer/edit/" + id]);
  }
  confirmDelete(id) {
    this.alert.question(
      () => {
        this.delete(id);
      },
      "Seguro que desea eliminar el producto",
      "Esta seguro"
    );
  }
  delete(id) {
    this.cutomerService.delete(id).subscribe(
      (response) => {
        this.alert.success("Cliente borrado con exito");
        this.getAll();
      },
      (error) => {
        this.alert.error(error.error);
      }
    );
  }

  newCustomer() {
    this.router.navigate(["customer/add"]);
  }
  getAll() {;
    this.cutomerService.get().subscribe((response) => {
      this.customer = response;
      this.dataPage = response;
    });
  }
}
