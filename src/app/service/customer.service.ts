import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { endpoint } from '../constant/endpoind';
import { BaseService } from './base-service';
import { Customer } from '../model/customer.model';

@Injectable()
export class CustomerService extends BaseService<Customer, number> {

  constructor(_httpClient: HttpClient) {
    super(_httpClient, environment.url + endpoint.customer);
  }

}
