import { style } from "@angular/animations";
import { Component, Input, OnChanges } from "@angular/core";

@Component(
    {
        selector: 'app-star-component',
        templateUrl: './app.star.component.html',
        styleUrls: ['./star.component.css']
    }
) 
export class StarComponent implements OnChanges{
    
    //@Input cria atriutos para a tag componente
    @Input()
    rating: number = 0;
    starWidth: number = 0;


    ngOnChanges(): void{

        this.starWidth = this.rating * 74 / 5;
    }
}