import { Component, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { Router } from "@angular/router";
import { AlertService } from "../../../service/alert-sweet.service";
import { ProductService } from "../../../service/product.service";
import { config } from "../../../constant/param";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  templateUrl: "./product-list.component.html",
  styleUrls: ["./../../../views/table.css"],
})
export class ProductListComponent implements OnInit {
  product = [];
  filter: any = {};
  dataPage = {};
  doctorId = 0;
  page: number = 0;
  constructor(
    private router: Router,
    private alert: AlertService,
    private _modalService: NgbModal,
    private productService: ProductService
  ) {}
  ngOnInit() {
    this.getAll();
  }
  openEditView(id: string) {
    this.router.navigate(["product/edit/" + id]);
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
    this.productService.delete(id).subscribe(
      (response) => {
        this.alert.success("Producto borrado con exito");
        this.getAll();
      },
      (error) => {
        this.alert.error(error.error);
      }
    );
  }

  newProduct() {
    this.router.navigate(["product/add"]);
  }
  getAll() {;
    this.productService.get().subscribe((response) => {
      this.product = response;
      this.dataPage = response;
    });
  }
}
