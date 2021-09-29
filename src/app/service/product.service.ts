import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { endpoint } from '../constant/endpoind';
import { BaseService } from './base-service';
import { Product } from '../model/invoice/product';

@Injectable()
export class ProductService extends BaseService<Product, number> {

  constructor(_httpClient: HttpClient) {
    super(_httpClient, environment.url + endpoint.product);
  }

}
