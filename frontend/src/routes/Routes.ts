/* Pages */
// import ErrorPage from '../containers/errorPage/ErrorPage';
import IRoute from '../models/Route';

// Private
import Home from '../pages/private/home/Home';

/* Layouts */
// import PublicLayout from '../layouts/publicLayout/PublicLayout';
import PrivateLayout from '../layouts/privateLayout/PrivateLayout';

export const routes: IRoute[] = [
  {
    path: '/',
    name: 'Home Page',
    component: Home,
    layout: PrivateLayout,
  }
];