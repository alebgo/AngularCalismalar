import { Component, OnInit, Input} from '@angular/core';
import { Customer } from './customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent implements OnInit{

  constructor(){ }

  customers:Customer[]=[]
  selectedCustomer:Customer | undefined
  @Input() city:string=""

  ngOnInit(){
    this.customers=[
      {id:1,firstName:"Ebru",lastName:"Koçak",age:33},
      {id:2,firstName:"Alev",lastName:"Koçak",age:25},
      {id:3,firstName:"Goncagül",lastName:"Koçak",age:21}
    ]
  }
  selectCustomer(customer:Customer){
    this.selectedCustomer=customer
  }
}
