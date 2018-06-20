import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CustomerComponent } from './customers/customer/customer.component';
import { CustomersComponent } from './customers/customers.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';

const routes: Routes = [
  { path: '', redirectTo: '/customersList', pathMatch: 'full' },
  { path: 'editCustomer', component: EditCustomerComponent },
  { path: 'customer', component: CustomerComponent },
  { path: 'customersList', component: CustomersComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [PageNotFoundComponent, EditCustomerComponent, CustomerComponent, CustomersComponent];

