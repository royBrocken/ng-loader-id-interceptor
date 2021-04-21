import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component'
import { DataAResolver } from './data-a.resolver'
import { DataBResolver } from './data-b.resolver'

const routes: Routes = [
  {
    path: 'a', component: AppComponent, resolve: { data: DataAResolver }
  },
  {
    path: 'b', component: AppComponent, resolve: { data: DataBResolver }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
