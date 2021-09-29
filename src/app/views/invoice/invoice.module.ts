// Angular
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { InvoiceAddComponent } from "./create/invoice-create.component";
import { InvoiceRoutingModule } from "./invoice.route";
import { ProductService } from "../../service/product.service";
import { OrderDetailService, OrderHeaderService } from '../../service/invoice.service';
import { AccountService } from "../../service/account.service";
import { AccountComponent } from "./account/account.component";
import { CustomerService } from "../../service/customer.service";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    InvoiceRoutingModule,
    TranslateModule,
  ],
  declarations: [
    InvoiceAddComponent,
    AccountComponent
  ],
 entryComponents:[AccountComponent],
  providers: [
    ProductService,
    OrderHeaderService,
    OrderDetailService,
    AccountService,
    CustomerService
  ],
})
export class InvoiceModule {}
