import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VecinoListComponent } from './components/vecino-list/vecino-list.component';
import { JuntaComponent } from './components/junta/junta.component';

const routes: Routes = [
  {path: 'vecinos', component: VecinoListComponent},
  {path: 'junta', component: JuntaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
