/* Models */
import IRoute from '../models/Route';

/* Private pages*/
import Home from '../pages/private/home/Home';

/* Layouts */
import PrivateLayout from '../layouts/privateLayout/PrivateLayout';

export const routes: IRoute[] = [
  {
    path: '/',
    name: 'Home Page',
    component: Home,
    layout: PrivateLayout,
  }
];