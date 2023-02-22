import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import modal component
import { ModalComponent } from './modal/modal.component';
//import modsHome component module
import { ModsHomeComponent } from './mods-home/mods-home.component';

//define the rule to show the modsHome component and a children to show the modalComponent inside the modsHome
const routes: Routes = [
  {
    path: '',
    component: ModsHomeComponent,
    children: [
      {
        path: '',
        component: ModalComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModsRoutingModule { }
