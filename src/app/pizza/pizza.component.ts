import { Component, OnInit, ViewChild } from '@angular/core';
import { Dough, DoughRecipe } from '../models/pizza-dough';
import { PizzacalculatorService } from '../services/pizzacalculator.service';
import { PizzaInfo } from '../models/pizza-info';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.scss']
})
export class PizzaComponent implements OnInit {
  public dough: Dough;
  public pizzaInfo: PizzaInfo;
  public doughType =  DoughRecipe;
  public displayRecipe: boolean;
  @ViewChild('carousel') carousel: NgbCarousel;
  constructor(private readonly pizzaService: PizzacalculatorService) {
    this.pizzaService.currentDough.subscribe(dough => this.dough = dough);
    this.displayRecipe = false;
  }

  ngOnInit(): void {
    this.pizzaInfo = {
      pizzaNumber: 1,
      pizzaSize: 250,
      pizzaWater: 57,
      pizzaDough: DoughRecipe.e_standard,
    };
    // this.pizzaService.updateMeasures(this.pizzaInfo);
  }

  public updatePizzaInfos(): void {
    this.pizzaService.updateMeasures(this.pizzaInfo);
    this.carousel.select('recipe');
    this.displayRecipe = true;
  }

  public goBack(): void {
      this.carousel.select('calculator');
      this.displayRecipe = false;
  }
}
