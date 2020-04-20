import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-data-field',
  template: `
  <form> 
  <mat-form-field class="data-form-field">
    <mat-label for="dataField">{{name | titlecase}}</mat-label>
    <input matInput type="number" min="0" id="dataField" [(ngModel)]="dataValue" name="data" (change)="calc()">
  </mat-form-field>
  </form>
  `,
  styles: [
  ]
})
export class DataFieldComponent{
  @Input() name : string;
  @Output() calcEvent = new EventEmitter();
  dataValue : number = 0;
  
  calc() {
    this.calcEvent.emit(null);
  }
}
