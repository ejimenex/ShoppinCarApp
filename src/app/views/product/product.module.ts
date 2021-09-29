// Angular
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";



import { ProductListComponent } from "./list/product-list.component";
import { ProductAddComponent } from "./create/product-create.component";
import { EditProductComponent } from "./edit/product-edit.component";
import { ProductRoutingModule } from "./product.route";
import { ProductService } from "../../service/product.service";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    ProductRoutingModule,
    TranslateModule,
  ],
  declarations: [
    ProductAddComponent,
    ProductListComponent,
    EditProductComponent
  ],
 entryComponents:[],
  providers: [
 
    ProductService
  ],
})
export class ProductModule {}
