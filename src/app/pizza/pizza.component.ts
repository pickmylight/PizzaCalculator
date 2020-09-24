import { Component, OnInit } from '@angular/core';
import { PizzaDough } from '../models/pizza-dough';
import { PizzacalculatorService } from '../services/pizzacalculator.service';
import { PizzaInfo } from '../models/pizza-info';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.scss']
})
export class PizzaComponent implements OnInit {
  public dough: PizzaDough;
  public pizzaInfo: PizzaInfo;
  constructor(private readonly pizzaService: PizzacalculatorService) {
    this.pizzaService.currentDough.subscribe(dough => this.dough = dough);
  }

  ngOnInit(): void {
    this.pizzaInfo = {
      pizzaNumber: 1,
      pizzaSize: 250,
      pizzaWater: 57,
    };
    this.pizzaService.updateMeasures(this.pizzaInfo);
  }

  public updatePizzaInfos(): void {
    console.log(this.pizzaInfo);
    this.pizzaService.updateMeasures(this.pizzaInfo);
  }

}
