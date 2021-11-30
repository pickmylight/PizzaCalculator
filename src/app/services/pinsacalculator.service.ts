import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PinsaDough } from '../models/pinsa-dough';
import { Dough, DoughRecipe } from '../models/pizza-dough';
import { PizzaInfo } from '../models/pizza-info';

@Injectable({
    providedIn: 'root'
})
export class PinsacalculatorService {
    private dataSource = new BehaviorSubject({} as PinsaDough);
    public currentDough = this.dataSource.asObservable();
    constructor() { }
    public updateDataSet(dough: PinsaDough): void {
        this.dataSource.next(dough);
    }

    public updateMeasures(pizzaInfo: PizzaInfo): void {
        let dough: PinsaDough;
        if (pizzaInfo.pizzaDough === DoughRecipe.e_standard) {
            const f = pizzaInfo.pizzaSize * pizzaInfo.pizzaNumber;
            dough = {
                flour: Number((0.45 * f).toFixed(0)),
                rice_flour: Number((0.09 * f).toFixed(0)),
                peas_flour: Number((0.045 * f).toFixed(0)),
                water: Number((0.38 * f).toFixed(0)),
                yeast: Number((0.0045 * f).toFixed(1)),
                olive_oil: Number((0.02 * f).toFixed(1)),
                salt: Number((0.01 * f).toFixed(1)),
            };
        }
        this.updateDataSet(dough);
    }
}
