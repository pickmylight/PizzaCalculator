import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Dough, DoughRecipe } from '../models/pizza-dough';
import { PizzaInfo } from '../models/pizza-info';

@Injectable({
  providedIn: 'root'
})
export class PizzacalculatorService {
  private dataSource = new BehaviorSubject({} as Dough);
  public currentDough = this.dataSource.asObservable();
  constructor() { }
  public updateDataSet(dough: Dough): void {
    this.dataSource.next(dough);
  }

  public updateMeasures(pizzaInfo: PizzaInfo): void {
    let dough: Dough;
    const doughSize = pizzaInfo.pizzaNumber * pizzaInfo.pizzaSize;
    if (pizzaInfo.pizzaDough === DoughRecipe.e_standard || pizzaInfo.pizzaDough === DoughRecipe.e_special) {
      // const f = Number(((pizzaInfo.pizzaNumber * pizzaInfo.pizzaSize) / (1 + (pizzaInfo.pizzaWater / 100) + 0.03 + 0.002)).toFixed(1));
      const f = Number(( doughSize / (1 + (pizzaInfo.pizzaWater / 100))).toFixed(1));
      dough = {
        flour: f,
        water: Number((doughSize - f).toFixed(1)),
        salt: Number((0.01 * f).toFixed(1)),
        yeast: Number((0.002 * f).toFixed(1)),
        levain: Number((0.002 * f).toFixed(1)),
      };
    } else if (pizzaInfo.pizzaDough === DoughRecipe.e_sour) {
      const f = Number(((pizzaInfo.pizzaNumber * (pizzaInfo.pizzaSize - 15)) / (1 + (pizzaInfo.pizzaWater / 100) + 0.03)).toFixed(1));
      dough = {
        flour: f,
        water: Number((doughSize - f).toFixed(1)),
        salt: Number((0.03 * f).toFixed(1)),
        levain: Number((pizzaInfo.pizzaNumber * 15).toFixed()),
        yeast: Number((0.002 * f).toFixed(1)),
      };
    }
    this.updateDataSet(dough);
  }
}
