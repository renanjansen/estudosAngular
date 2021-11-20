/*arquivo que recebe todos os componentes e são declarados
  no declarations
 'o módulo é a casa,
  os comodos são os componentes
*/


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CourseListComponent } from './cousers/courseList.component';
import { StarComponent } from './star/star.component';



@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    StarComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
