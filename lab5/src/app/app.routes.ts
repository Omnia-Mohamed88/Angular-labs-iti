import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { CartComponent } from './cart/cart.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { NotfoundComponent } from './notfound/notfound.component';

export const routes: Routes = [
    {
        path: "",
        component: ProductlistComponent,
        title: "Home"
    },
    {
        path: "register",
        component: RegisterComponent,
        title: "register page"
    },
    {
        path: "login",
        component: LoginComponent,
        title: "login page"
    },
    {
        path: "product/:id",
        component: ProductdetailsComponent,
        title: "product details"
    },
    {
        path: "cart",
        component: CartComponent,
        title: "cart"
    },
    {
        path: "**",
        component: NotfoundComponent,
        title: "not fount page"
    }];
