import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public displayType: string;
  constructor(private readonly router: Router) { }

  ngOnInit(): void {
      if (this.router.url.startsWith('/pizza')) {
        this.displayType = 'PizzaCalculator';
      } else {
        this.displayType = 'PinsaCalculator';
      }
  }

  changeCalculator(): void {
      switch (this.displayType) {
          case 'PizzaCalculator':
            this.router.navigateByUrl('/pinsa');
            break;
          case 'PinsaCalculator':
            this.router.navigateByUrl('/pizza');
            break;
          default:
              break;
      }
  }

}
