//layouts
import routesConfig from '~/config/routes';
//pages
import Home from '~/pages/Home';
import CartPage from '~/pages/CartPage';
import Product from '~/pages/Product';
//không đăng nhập vẫn xem được
const publicRoutes = [
    { path: routesConfig.home, component: Home },
    { path: routesConfig.cart, component: CartPage },
    { path: routesConfig.productDetail, component: Product },
];
//đăng nhập mới xem được
const privateRoutes = [];

export { publicRoutes, privateRoutes };
