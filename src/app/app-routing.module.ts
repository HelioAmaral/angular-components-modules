import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import components we want to display
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  //set lazy loading for the elements and collections module:
  //we set the object with the path, then the specific rule of what happens once the user goes to that path.
  //the loadChildren function is called everytime the user chooses this path
  //angular checks the contents of this function
  //.then returns the actual model we requested
  {
    path: 'elements',
    loadChildren: () =>
      import('./elements/elements.module').then((m) => m.ElementsModule),
  },
  //lazy loading for collections
  {
    path: 'collections',
    loadChildren: () =>
      import('./collections/collections.module').then(
        (m) => m.CollectionsModule
      ),
  },
  //lazy loading for views module
  {
    path: 'views',
    loadChildren: () =>
      import('./views/views.module').then((m) => m.ViewsModule),
  },
  //lazy loading for mods component
  {
    path: 'mods',
    loadChildren: () => import('./mods/mods.module').then((m) => m.ModsModule),
  },
  //define the home component path
  { path: '', component: HomeComponent },
  //define not found component path - the ** tells angular if he doesn't find the component requested by user, show the notFound component
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
