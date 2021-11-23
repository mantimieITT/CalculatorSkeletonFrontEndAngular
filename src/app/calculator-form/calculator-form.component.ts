import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-calculator-form',
  templateUrl: './calculator-form.component.html',
  styleUrls: ['./calculator-form.component.css']
})
export class CalculatorFormComponent{

  constructor(private http: HttpClient) { }

  onSubmit(data:string)
    {
      this.http.post('', data).subscribe((result)=>{
        console.warn("result",result)})
      console.warn(data);
      
    }
}
