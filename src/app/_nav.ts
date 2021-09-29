import { INavData } from '@coreui/angular';


export const navItems: INavData[] =

[
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer'
  
  },

  {
    title: true,
    name: 'Options'
  },

    {
      name: 'Productos',
      url: '/product',
      icon: 'icon-grid',
    },  
    {
      name: 'Clientes',
      url: '/customer',
      icon: 'icon-grid',
    },
    {
      name: 'Ventas',
      url: '/invoice/add',
      icon: 'icon-basket',
    }, 
  
  {
    name: 'Disabled',
    url: '/dashboard',
    icon: 'icon-ban',
    badge: {
      variant: 'secondary',
      text: 'NEW'
    }
    ,
     attributes: { disabled: true },
   }
];
