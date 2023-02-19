import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import the element we want to display
import { ElementsHomeComponent } from './elements-home/elements-home.component';

const routes: Routes = [
  //this rules anythime the user goes to the path 'elements' show the user the component ElementsHomeComponent
  //path is an empty string because we are using lazy loading (set on appRouting) and because they are cumulative we leave this as empty string otherwise the user would have to follow elements/elements to see the module content
  { path: '', component: ElementsHomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElementsRoutingModule { }
