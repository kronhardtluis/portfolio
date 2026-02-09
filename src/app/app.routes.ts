import { Legals } from './legals/legals';
import { Routes } from '@angular/router';
import { Mainpage } from './mainpage/mainpage';

export const routes: Routes = [
  {path:"", component:Mainpage},
  {path:"legals", component:Legals}
];
