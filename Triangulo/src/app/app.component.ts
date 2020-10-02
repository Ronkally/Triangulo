import { Component } from '@angular/core';
import { triangulo } from "../models/triangulo.";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
