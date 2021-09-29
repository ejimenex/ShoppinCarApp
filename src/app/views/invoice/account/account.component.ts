import {
  Component,
  OnInit,
  ViewChild,
  Output,
  EventEmitter,
} from "@angular/core";
import { NgbActiveModal, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { TranslateService } from "@ngx-translate/core";
import { AccountModel } from "../../../model/invoice/account.model";
import { AccountService } from "../../../service/account.service";
import { AlertService } from "../../../service/alert-sweet.service";

@Component({
  selector: "eaccount-app",
  templateUrl: "./account.component.html",
})
export class AccountComponent implements OnInit {
  @Output() notifyParent: EventEmitter<any> = new EventEmitter();
  id: number;
  account: AccountModel = new AccountModel();

  constructor(
    private alertService: AlertService,
    public activeModal: NgbActiveModal,
    private accountService: AccountService,    
    private _modalService: NgbModal,
  ) {}

  ngOnInit() {}

  login() {
    this.accountService.login(this.account).subscribe(
      (response) => {
        this.alertService.success("Cliente logueado");
        localStorage.setItem("currentUser", response.code);
        this.notifyParent.emit(response.code);
        this.close();
      },
      (error) => {
          this.alertService.error(error.error)
      }
    );
  }
  close() {
    this.activeModal.close();
  }
}
