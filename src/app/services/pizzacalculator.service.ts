import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PizzaDough } from '../models/pizza-dough';
import { PizzaInfo } from '../models/pizza-info';

@Injectable({
  providedIn: 'root'
})
export class PizzacalculatorService {
  private dataSource = new BehaviorSubject({} as PizzaDough);
  public currentDough = this.dataSource.asObservable();
  constructor() { }


  public updateDataSet(dough: PizzaDough): void {
    this.dataSource.next(dough);
  }

  public updateMeasures(pizzaInfo: PizzaInfo): void {
    const f = Number(((pizzaInfo.pizzaNumber * pizzaInfo.pizzaSize) / (1 + (pizzaInfo.pizzaWater / 100) + 0.03 + 0.002)).toFixed(1));
    const dough: PizzaDough = {
      flour: f,
      water: Number(((f * pizzaInfo.pizzaWater) / 100).toFixed(1)),
      salt: Number((0.01 * f).toFixed(1)),
      yeast:  Number((0.002 * f).toFixed(1)),
    };
    console.log(dough);
    this.updateDataSet(dough);
  }
}
