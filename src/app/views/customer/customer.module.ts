// Angular
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { EditCustomerComponent } from "./edit/customer-edit.component";
import { ProductService } from "../../service/product.service";
import { CustomerService } from "../../service/customer.service";
import { CustomerRoutingModule } from "./customer.route";
import { CustomerAddComponent } from "./create/customer-create.component";
import { CustomerListComponent } from "./list/customer-list.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    CustomerRoutingModule,
    TranslateModule,
  ],
  declarations: [
    CustomerAddComponent,
    CustomerListComponent,
    EditCustomerComponent
  ],
 entryComponents:[],
  providers: [
 
    CustomerService
  ],
})
export class CustomerModule {}
