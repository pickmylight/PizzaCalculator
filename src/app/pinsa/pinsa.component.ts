import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
import { PinsaDough } from '../models/pinsa-dough';
import { DoughRecipe } from '../models/pizza-dough';
import { PizzaInfo } from '../models/pizza-info';
import { PinsacalculatorService } from '../services/pinsacalculator.service';

@Component({
  selector: 'app-pinsa',
  templateUrl: './pinsa.component.html',
  styleUrls: ['./pinsa.component.scss']
})
export class PinsaComponent implements OnInit {
  public displayRecipe: boolean;
  public dough: PinsaDough
  public pizzaInfo: PizzaInfo;
  @ViewChild('carousel') carousel: NgbCarousel;
  constructor(private readonly pinsaService: PinsacalculatorService) {
      this.pinsaService.currentDough.subscribe(dough => this.dough = dough);
      this.displayRecipe = false;
  }

  ngOnInit(): void {
      this.pizzaInfo = {
        pizzaNumber: 1,
        pizzaSize: 223,
        pizzaWater: 50,
        pizzaDough: DoughRecipe.e_standard,
      };
  }
  public updatePizzaInfos(): void {
    this.pinsaService.updateMeasures(this.pizzaInfo);
    this.carousel.select('recipe');
    this.displayRecipe = true;
  }

  public goBack(): void {
    this.carousel.select('calculator');
    this.displayRecipe = false;
}

}
