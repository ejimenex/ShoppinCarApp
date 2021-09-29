import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ProductListComponent  } from './list/product-list.component';
import { ProductAddComponent } from './create/product-create.component';
import { EditProductComponent } from './edit/product-edit.component';



const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Productos'
    },
    
    children: [
   {
      path: '',
      component:ProductListComponent,
   },
      {
        path: 'add',
        component: ProductAddComponent    
      },
      {
        path: 'edit/:id',
        component: EditProductComponent    
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule {}
