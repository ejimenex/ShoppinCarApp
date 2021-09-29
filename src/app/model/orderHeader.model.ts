import { BaseModel } from "./invoice/base-model"

export class OrderHeader extends BaseModel
{
   customerId:string
   invoiced:boolean
   total:number
   totalItems:number
}