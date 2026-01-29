import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VecinoListComponent } from './components/vecino-list/vecino-list.component';
import { FormsModule } from '@angular/forms';
import { JuntaComponent } from './components/junta/junta.component';
import { GritarDirective } from './directives/gritar.directive';
import { MayusculasPipe } from './pipes/mayusculas.pipe';

@NgModule({
  declarations: [
    AppComponent,
    VecinoListComponent,
    JuntaComponent,
    GritarDirective,
    MayusculasPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
