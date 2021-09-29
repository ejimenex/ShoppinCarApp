import { BaseModel } from "./invoice/base-model"

export class OrderDetail extends BaseModel
{
   productName:string
   productId:string
   orderId:string
   salesPrice:number
   quantity:number
   total:number
}