import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Customer } from './customer.model';

@Injectable()
export class CustomerService {
  customerList: AngularFireList<any>;
  selectedCustomer: Customer = new Customer();
  constructor(private firebase: AngularFireDatabase) { }

  getData() {
    this.customerList = this.firebase.list('customers');
    return this.customerList;
    // console.log(this.customerList);
  }

  insertCustomer(customer: Customer) {
    this.customerList.push({
      ID: customer.ID,
      firstName: customer.firstName,
      lastName: customer.lastName,
      birthdate: customer.birthdate,
      gender: customer.gender,
      lastContact: customer.lastContact,
      lifeTimeValue: customer.lifeTimeValue,
    });
  }

  updateCustomer(customer: Customer) {
    this.customerList.update(customer.$key, {
      ID: customer.ID,
      firstName: customer.firstName,
      lastName: customer.lastName,
      birthdate: customer.birthdate,
      gender: customer.gender,
      lastContact: customer.lastContact,
      lifeTimeValue: customer.lifeTimeValue,
    });
  }

  deleteCustomer($key: string) {
    this.customerList.remove($key);
  }
}
