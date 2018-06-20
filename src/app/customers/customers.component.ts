import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material';
import { CustomerService } from './shared/customer.service';
import { Customer } from './shared/customer.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
  providers: [CustomerService]
})
export class CustomersComponent implements OnInit {
  dataSource;
  displayedColumns = ['id', 'name', 'birthday', 'gender', 'customerLifetimeValue', 'lastContact', 'actions'];

  customersList: Customer[];
  constructor(private router: Router, private customerService: CustomerService, private toastr: ToastrService) { }

  ngOnInit() {
    var x = this.customerService.getData();
    x.snapshotChanges().subscribe(item => {
      this.customersList = [];
      item.forEach(element => {
        var y = element.payload.toJSON();
        y['$key'] = element.key;
        this.customersList.push(y as Customer);
        this.dataSource = new MatTableDataSource(this.customersList);
      });
    });

  }

  onEdit(cust: Customer) {
    this.customerService.selectedCustomer = cust;
    this.router.navigate(['/customer', cust]);
  }

  onDelete(key: string) {
    if (confirm('Are you sure to delete this customer ?') == true) {
      this.customerService.deleteCustomer(key);
      this.toastr.error('Deleted Successfully', 'Customer Deleted');
    }
  }
}
