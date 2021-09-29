import { BaseModel } from "./invoice/base-model"

export class Customer extends BaseModel
{
   name:string
   lastName:string
   documentNumber:string
   phoneNumber:string
   address:string
   email:string
   password:string
}