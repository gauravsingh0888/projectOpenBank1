import { Component, OnInit } from '@angular/core';
import {MatSliderChange} from '@angular/material/slider';
import {BehaviorSubject} from 'rxjs';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private incomeslideSubject = new BehaviorSubject<any>(0);
  readonly incomeSlideValue$ = this.incomeslideSubject.asObservable();
  private expenseslideSubject = new BehaviorSubject<any>(0);
  readonly expenseSlideValue$ = this.expenseslideSubject.asObservable();
  repayment = new FormControl();
  emifield = new FormControl();

  tenures = [
    {val: 0.5, desp: "6 Months"},
    {val: 1, desp: "1 Year"},
    {val: 5, desp: "5 Years"},
    {val: 10, desp: "10 Years"},
  ]
  constructor() { }

  ngOnInit(): void {
  }

  
  updateIncomeSliderValue(event: MatSliderChange){
    this.incomeslideSubject.next(event.value);
}
 
updateExpenseSliderValue(event: MatSliderChange){
  this.expenseslideSubject.next(event.value);
}
}
