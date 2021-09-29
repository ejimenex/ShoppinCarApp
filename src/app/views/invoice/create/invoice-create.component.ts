import { Component, DebugElement, OnInit } from "@angular/core";
import { AlertService } from "../../../service/alert-sweet.service";
import { Router, ActivatedRoute } from "@angular/router";
import { ProductService } from "../../../service/product.service";
import { Product } from "../../../model/invoice/product";

import {
  OrderHeaderService,
  OrderDetailService,
} from "../../../service/invoice.service";

import { Invoice, InvoiceDetail } from "../../../model/invoice/Invoice.model";
import { OrderDetail } from "../../../model/orderDetail.model";
import { config } from "../../../constant/param";
import { AccountComponent } from "../account/account.component";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { CustomerService } from "../../../service/customer.service";
import { Customer } from "../../../model/customer.model";

@Component({
  templateUrl: "./invoice-create.component.html",
})
export class InvoiceAddComponent implements OnInit {
  product: Product = new Product();
  products = [];
  invoice: Invoice = new Invoice();
  detail: OrderDetail[];
  detailObj: OrderDetail = new OrderDetail();
  productType = [];
  salesData: any = {};
  total = 0;
  currentCustomer = "";
  customer: Customer = new Customer();

  constructor(
    private router: Router,
    private alertService: AlertService,
    private productService: ProductService,
    private orderHeaderService: OrderHeaderService,
    private orderDetailService: OrderDetailService,
    private _modalService: NgbModal,
    private customerService: CustomerService
  ) {}

  ngOnInit() {
    this.total = 0;
    this.detail = [];

    this.currentCustomer = localStorage.getItem("currentUser");
    if (!this.currentCustomer) this.changeCustomer();
    else this.getCurrentCustomer();
    this.onLoad();
  }
  sumTotal() {
    this.total = 0;
    for (let i = 0; i <= this.detail.length; i++) {
      this.total += this.detail[i].total;
    }
  }
  async addToList(item: Product) {
    if (!item.quantity)
      return this.alertService.error("Debe especificar la cantidad");
    if (item.quantity > item.stock)
      return this.alertService.error(
        "La cantidad que intenta agregar excede la disponible en el inventario"
      );
    this.detailObj.productId = item.id;
    this.detailObj.quantity = item.quantity;
    this.detailObj.total = item.price * item.quantity;
    this.detailObj.salesPrice = item.price;

    this.orderDetailService.post(this.detailObj).subscribe((res) => {
      this.alertService.success("Articulo agregado al carrito exitosamente");
      this.onLoad();
    });

    this.sumTotal();
  }
  async getCurrentCustomer() {
    this.customer = await this.customerService
      .getByGuid(this.currentCustomer)
      .toPromise();
  }
  changeCustomer() {
    let modal = this._modalService.open(AccountComponent, config.modalConfig);
    modal.componentInstance.notifyParent.subscribe((result) => {
      this.currentCustomer = result;
      this.onLoad();
      this.getCurrentCustomer();
    });
  }

  deleteItem(item) {
    this.orderDetailService.delete(item).subscribe((response) => {
      this.alertService.success("Articulo sacado del carrito");

      this.onLoad();
    });
    this.sumTotal();
  }

  saveInvoice(): void {
    if (this.detail.length == 0)
      return this.alertService.error("No hay datos para facturar");
  }
  async onLoad() {
    this.products = [];
    this.products = await this.productService.get().toPromise();
    this.detailObj.orderId = await this.orderHeaderService
      .getCurrentOrder(this.currentCustomer)
      .toPromise();
    await this.orderDetailService
      .getDetailByOrder(this.detailObj.orderId)
      .toPromise()
      .then((res) => {
        this.detail = res;
        this.sumTotal();
      });
  }
 async save() {
    let ordrerId = await this.orderHeaderService
    .getCurrentOrder(this.currentCustomer)
    .toPromise();
    if (this.detail.length < 2)
      this.alertService.error("Debe haber al menos 2 articulos para facturar");
      let order= await this.orderHeaderService.getByGuid(ordrerId).toPromise();
      order.invoiced=true;
       this.orderHeaderService.put(0, order).subscribe(
      (response) => {
        this.onLoad();
        this.alertService.success("Factura registrada correctamente");
      },
      (error) => {
        this.alertService.error(error.error);
      }
    );
  }
}
