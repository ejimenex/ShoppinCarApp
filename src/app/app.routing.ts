import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

 

// Import Containers

import { DefaultLayoutComponent } from './containers';

 

import { P404Component } from './views/error/404.component';

import { P500Component } from './views/error/500.component';

import { RegisterComponent } from './views/register/register.component';

 

export const routes: Routes = [

  {

    path: '',

    redirectTo: 'dashboard',

    pathMatch: 'full',

  },

  {

    path: '404',

    component: P404Component,

    data: {

      title: 'Page 404'

    }

  },

  {

    path: '500',

    component: P500Component,

    data: {

      title: 'Page 500'

    }

  },

  {

    path: 'register',

    component: RegisterComponent,

    data: {

      title: 'Register Page'

    }

  },

  {

    path: '',

    component: DefaultLayoutComponent,

    data: {

      title: 'Home'

    },

    children: [

      {

        path: 'base',

        loadChildren: () => import('./views/base/base.module').then(m => m.BaseModule)

      },

      {

        path: 'buttons',

        loadChildren: () => import('./views/buttons/buttons.module').then(m => m.ButtonsModule)

      },

     
      {

        path: 'customer',

        loadChildren: () => import('./views/customer/customer.module').then(m => m.CustomerModule)

      },

      {

        path: 'product',

        loadChildren: () => import('./views/product/product.module').then(m => m.ProductModule)

      },

     

      

      {

        path: 'invoice',

        loadChildren: () => import('./views/invoice/invoice.module').then(m => m.InvoiceModule)

      },

     

      {

        path: 'charts',

        loadChildren: () => import('./views/chartjs/chartjs.module').then(m => m.ChartJSModule)

      },

      {

        path: 'dashboard',

        loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)

      },

      {

        path: 'icons',

        loadChildren: () => import('./views/icons/icons.module').then(m => m.IconsModule)

      },

      {

        path: 'notifications',

        loadChildren: () => import('./views/notifications/notifications.module').then(m => m.NotificationsModule)

      },

      {

        path: 'theme',

        loadChildren: () => import('./views/theme/theme.module').then(m => m.ThemeModule)

      },

      {

        path: 'widgets',

        loadChildren: () => import('./views/widgets/widgets.module').then(m => m.WidgetsModule)

      }

    ]

  },

  { path: '**', component: P404Component }

];

 

@NgModule({

  imports: [ RouterModule.forRoot(routes) ],

  exports: [ RouterModule ]

})

export class AppRoutingModule {}