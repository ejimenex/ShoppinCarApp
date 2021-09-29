import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { endpoint } from "../constant/endpoind";
import { BaseService } from "./base-service";
import { AccountModel } from "../model/invoice/account.model";

@Injectable()
export class AccountService extends BaseService<AccountModel, number> {
  constructor(_httpClient: HttpClient) {
    super(_httpClient, environment.url + endpoint.account);
  }
  login(model: AccountModel) {
    return this._httpClient.post<any>(
      environment.url + endpoint.account,
      model
    );
  }
}
