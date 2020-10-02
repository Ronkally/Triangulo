import { Component, OnInit } from '@angular/core';
import {triangulo} from '../../../models/triangulo.'

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  title = 'Triangulo';
  public triangulo: triangulo;
  result: boolean = false;
  resultMessage: string = "";

  constructor() { 
    this.triangulo = new triangulo(null, null, null);
    
  }
  ngOnInit(): void {
  }

  onSubmit(form){
    this.result = true;
    this.resultMessage = this.triangulo.ReturnTriangleType();
    console.log(this.resultMessage);
    
  }
}
