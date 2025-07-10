import HomePage from '../pages/HomePage/HomePage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import OrderPage from '../pages/OrderPage/OrderPage';
import ProductsPage from '../pages/ProductsPage/ProductsPage';
import SignInPage from '../pages/SignInPage/SignInPage';
import SignUpPage from '../pages/SignUpPage/SignUpPage';
import ProductDetailsPage from '../pages/ProductDetailsPage/ProductDetailsPage';
import TypeProductPage from '../pages/TypeProductPage/TypeProductPage';
import CartPage from '../pages/CartPage/CartPage';
import PaymentPage from '../pages/PaymentPage/PaymentPage';
import OrderSuccessPage from '../pages/OrderSuccessPage/OrderSuccessPage';
import SearchResultsPage from '../pages/SearchResultsPage/SearchResultsPage';

 export const routes = [
    {
        path: '/',
        page: HomePage,
        isShowHeader: true
    },
    {
        path: '/order',
        page: OrderPage,
        isShowHeader: true
    },
    {
        path: '/products',
        page: ProductsPage,
        isShowHeader: true
    },
    {
        path: '/cart',
        page: CartPage,
        isShowHeader: true
    },
    {
        path: '/payment',
        page: PaymentPage,
        isShowHeader: true
    },
    {
        path: '/order-success',
        page: OrderSuccessPage,
        isShowHeader: true
    },
    {
        path: '/search',
        page: SearchResultsPage,
        isShowHeader: true
    },
    {
        path: '/:type',
        page: TypeProductPage,
        isShowHeader: true
    },
    {
    path: '/sign-up',
    page: SignUpPage,
    isShowHeader: false
    },
    {
    path: '/sign-in',
    page: SignInPage,
    isShowHeader: false
    },
    {
    path: '/product-details',
    page: ProductDetailsPage,
    isShowHeader: true
    },
    {
        path: '*',
        page: NotFoundPage
    }
]