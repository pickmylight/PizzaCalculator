import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pinsa',
  templateUrl: './pinsa.component.html',
  styleUrls: ['./pinsa.component.scss']
})
export class PinsaComponent implements OnInit {
  public displayRecipe: boolean;
  @ViewChild('carousel') carousel: NgbCarousel;
  constructor() {
      this.displayRecipe = false;
  }

  ngOnInit(): void {
  }
  public updatePizzaInfos(): void {
    this.carousel.select('recipe');
    this.displayRecipe = true;
  }

  public goBack(): void {
    this.carousel.select('calculator');
    this.displayRecipe = false;
}

}
