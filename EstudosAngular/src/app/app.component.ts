/*  
  arquivo de do componente  que aponta
  a direção através do templateUrl, e
  o nome da futura tag criada através do selector
*/
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Estudos Angular';
  n1: number = 0;
  n2: number = 0;
  operador: string = '';
  
  
  
}
