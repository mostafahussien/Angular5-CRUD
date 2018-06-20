import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../shared/customer.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
  providers: [CustomerService]
})
export class CustomerComponent implements OnInit {
  public editData;
  constructor(private route: ActivatedRoute, private router: Router,
    public customerService: CustomerService, private toastr: ToastrService) {
    const data = this.route.snapshot.params;
    this.editData = data;
    console.log(this.editData.$key);
    if (this.editData.ID != null) {
      this.customerService.selectedCustomer.$key = this.editData.$key;
      this.customerService.selectedCustomer.ID = this.editData.ID;
      this.customerService.selectedCustomer.firstName = this.editData.firstName;
      this.customerService.selectedCustomer.lastName = this.editData.lastName;
      this.customerService.selectedCustomer.birthdate = this.editData.birthdate;
      this.customerService.selectedCustomer.gender = this.editData.gender;
      this.customerService.selectedCustomer.lastContact = this.editData.lastContact;
      this.customerService.selectedCustomer.lifeTimeValue = this.editData.lifeTimeValue;
    }
  }

  ngOnInit() {
    this.customerService.getData();
  }


  onSubmit(customerForm: NgForm) {
    if (customerForm.value.$key == null) {
      this.customerService.insertCustomer(customerForm.value);
    } else {
      this.customerService.updateCustomer(customerForm.value);
    }
    this.toastr.success('Added Successfully', 'Customer Added');
    this.resetForm(customerForm);
    this.router.navigate(['/customersList']);

  }

  resetForm(customerForm?: NgForm) {
    if (customerForm != null) {
      customerForm.reset();
      this.customerService.selectedCustomer = {
        $key: null,
        ID: 0,
        firstName: '',
        lastName: '',
        birthdate: '',
        gender: '',
        lastContact: '',
        lifeTimeValue: ''
      };
    }

  }

}
