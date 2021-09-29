import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvoiceAddComponent } from './create/invoice-create.component';



const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Facturas'
    },
    
    children: [
 
      {
        path: 'add',
        component: InvoiceAddComponent    
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoiceRoutingModule {}
