import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContentwrapperComponent } from './contentwrapper/contentwrapper.component';
import { PizzaComponent } from './pizza/pizza.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PizzacalculatorService } from './services/pizzacalculator.service';
import { FormsModule } from '@angular/forms';
import { RecipesComponent } from './recipes/recipes.component';
import { RouterModule } from '@angular/router';
import { TeiglingComponent } from './teigling/teigling.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { WikiComponent } from './wiki/wiki.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContentwrapperComponent,
    PizzaComponent,
    RecipesComponent,
    TeiglingComponent,
    WikiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    NgbModule,
    FormsModule,
    RouterModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule.enablePersistence(),
    AngularFireStorageModule
  ],
  providers: [PizzacalculatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
