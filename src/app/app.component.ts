import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string;
  dateRaw: string;
  amount: number;
  amountUSD: number;
  height: number;
  miles: number;
  password: string;

  car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2000
  };
  
  onMilesChange(value: string) {
    this.miles = parseFloat(value);
  }

  onHeightChange(value: string) {
    this.height = parseFloat(value);
  }

  onNameChange(value: string) {
    this.name = value;
  }

  onDateChange(value: string) {
    this.dateRaw = value;
  }

  onAmountChange(value: string) {
    this.amount = parseFloat(value);
  }

  onAmountChangeUSD(value: string) {
    this.amountUSD = parseFloat(value);
  }

  onPasswordChange(value: string) {
    this.password = value;
  }
}
