/*  
  arquivo do componente  que aponta
  a direção através do templateUrl, e
  o nome da futura tag criada através do selector
*/

import { Component, OnInit } from "@angular/core";
import { Course } from "./course.component";
import { CourseService } from "./course.service";


@Component({
  selector: 'app-course-list',
  templateUrl: './app.component.courseList.html'
}
)
export class CourseListComponent implements OnInit {

  //atributo courses e um array que recebe course.component.ts
  courses: Course[] = [];

  //injeçao do service no componente através do construtor
  constructor(private courseservice: CourseService){

  }

  //ngOnInit() funcao que determina o carregamento imediato dos itens na aplicaçao
  ngOnInit(): void {

    this.courses = this.courseservice.retriaveAll();
       
  }
}