import { Component, OnInit } from '@angular/core';

import { Calculator } from '../calculator';

@Component({
  selector: 'app-calculator-form',
  templateUrl: './calculator-form.component.html',
  styleUrls: ['./calculator-form.component.css']
})
export class CalculatorFormComponent implements OnInit {

  constructor() { }

  model = new Calculator('');
  submitted = false;

  onSubmit() {this.submitted = true;}

  newCalculator(){
    this.model = new Calculator('');
  }
  ngOnInit(): void {
  }

}
