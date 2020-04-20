import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Net Worth Calculator';
  netWorth : number = 0;
  formattedNetWorth : string = "";

  /* Input fields - Assets*/
  @ViewChild('bankMoney') bankMoney;
  @ViewChild('invesments') invesments;
  @ViewChild('cars') cars;
  @ViewChild('homes') homes;
  @ViewChild('personalProperty') personalProperty;
  @ViewChild('cash') cash;

  /* Input fields - Liabilities*/
  @ViewChild('carLoans') carLoans;
  @ViewChild('credit') credit;
  @ViewChild('student') student;
  @ViewChild('mortage') mortage;
  @ViewChild('taxes') taxes;
  @ViewChild('debt') debt;
  @ViewChild('medicalBills') medicalBills;

  calculateNetWorth() {
    console.log(this.carLoans.dataValue);
    let assets : number = this.bankMoney.dataValue + this.invesments.dataValue + this.cars.dataValue + this.homes.dataValue + this.personalProperty.dataValue + this.cash.dataValue;
    let liabilities : number = this.carLoans.dataValue + this.credit.dataValue + this.student.dataValue + this.mortage.dataValue + this.taxes.dataValue + this.debt.dataValue + this.medicalBills.dataValue;
    this.netWorth = assets - liabilities;
    let formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    });
    this.formattedNetWorth = formatter.format(this.netWorth);
  }
}
