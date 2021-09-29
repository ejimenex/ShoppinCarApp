import { Component, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { AlertService } from "../../../service/alert-sweet.service";
import { Router, ActivatedRoute } from "@angular/router";
import {ProductService } from "../../../service/product.service";
import {Product} from '../../../model/invoice/product';
import { config } from '../../../constant/param';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';



@Component({
    selector: 'edit-product-app',
    templateUrl: './product-edit.component.html'
})
export class EditProductComponent implements OnInit {
    product: Product=new Product();
    unitOfMeasure = [];
    productType = [];
    id:string

  
    constructor(
      private router: Router,
      private route: ActivatedRoute,
      private alertService: AlertService,
      private productService: ProductService,
      private _modalService: NgbModal
    ) {}
  
    ngOnInit() {
      this.id = this.route.snapshot.paramMap.get("id")
      this.onLoad();
    }
  
    validateRequidesFileds() {
      let result = !this.product.name || !this.product.price;
      return result;
    }
     onLoad() {
   
     this.productService.getByGuid(this.id).subscribe(res=> this.product=res)
    }

    save(){
      this.alertService.question(()=>{this.edit()},'Confirmación','Seguro desea modificar')
    }
    edit() {
      if (this.validateRequidesFileds())
        return this.alertService.error("Verificar campos requeridos", "Error");
      this.productService.put(1,this.product).subscribe(
        (response) => {
          this.router.navigate(["/product"]);
          this.alertService.success("Producto editado correctamente");
        },
        (error) => {
          this.alertService.error(error.error);
        }
      );
    }
  }
  