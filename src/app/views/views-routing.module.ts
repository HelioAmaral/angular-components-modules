import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatisticsComponent } from './statistics/statistics.component';
//import views-home-component so we can show it
import { ViewsHomeComponentComponent } from './views-home-component/views-home-component.component';

//define the path and the component to show on that path
const routes: Routes = [
  {
    path: '',
    component: ViewsHomeComponentComponent,
    //add a child path so we can show another component inside viewsHomeComponent
    children: [
      {
        path: '',
        component: StatisticsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
