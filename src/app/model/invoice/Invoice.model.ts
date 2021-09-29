import { BaseModel } from './base-model'

export class Invoice  extends BaseModel
{
total:number
}

export class InvoiceDetail extends BaseModel
{
invoiceId:string
productName:string
productId:string
quantity:number
price:number
total:number
}