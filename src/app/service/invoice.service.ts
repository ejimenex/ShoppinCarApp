import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { endpoint } from '../constant/endpoind';
import { BaseService } from './base-service';
import { Invoice, InvoiceDetail } from '../model/invoice/Invoice.model';
import { OrderHeader } from '../model/orderHeader.model';
import { OrderDetail } from '../model/orderDetail.model';



@Injectable()
export class OrderHeaderService extends BaseService<OrderHeader, number> {

  constructor(_httpClient: HttpClient) {
    super(_httpClient, environment.url + endpoint.orderHeader );
  }
  getCurrentOrder(customer:string) {
    return this._httpClient.get<string>(environment.url + endpoint.orderHeader+`/getCurrentOrder?customer=${customer}`,this.httpOptions)
  }
 
}
@Injectable()
export class OrderDetailService extends BaseService<OrderDetail, number> {

  constructor(_httpClient: HttpClient) {
    super(_httpClient, environment.url + endpoint.orderDetail);
  }
  getDetailByOrder(order:string) {
    return this._httpClient.get<any>(environment.url + endpoint.orderDetail+`/GetDetailByOrder?order=${order}`,this.httpOptions)
  }
 
 
}