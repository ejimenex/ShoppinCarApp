import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerAddComponent } from "./create/customer-create.component";
import { EditCustomerComponent } from './edit/customer-edit.component';
import { CustomerListComponent } from "./list/customer-list.component";



const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Productos'
    },
    
    children: [
   {
      path: '',
      component:CustomerListComponent,
   },
      {
        path: 'add',
        component: CustomerAddComponent    
      },
      {
        path: 'edit/:id',
        component: EditCustomerComponent    
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule {}
