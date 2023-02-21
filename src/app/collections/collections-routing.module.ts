import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionsHomeComponent } from './collections-home/collections-home.component';
//import the components we can show
import { BiographyComponent } from './biography/biography.component';
import { CompaniesComponent } from './companies/companies.component';
import { PartnersComponent } from './partners/partners.component';

const routes: Routes = [
  {path: '', 
  component: CollectionsHomeComponent,
  //we add a children component, an array of objects, these objects describe the 3 components we can possibly show (companies, partners, biography)
  //the child property here means we want to show these paths inside the CollectionsHomeComponent
  children: [
    //we specify when the path is '' we show biography component
    {path: '', component: BiographyComponent},
    {path: 'companies', component: CompaniesComponent},
    {path: 'partners', component: PartnersComponent}
  ] 
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollectionsRoutingModule { }
