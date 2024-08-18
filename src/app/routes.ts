import { Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { DetailsComponent } from './details/details.component';

const routerConfig: Routes = [
  {
    path: '',
    component: MenuComponent,
    title: 'Herarempah',
  },

  {
    path: 'details/:id',
    component: DetailsComponent,
    title: 'Details Page',
  },
];

export default routerConfig;
