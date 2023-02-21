import { Component } from '@angular/core';

@Component({
  selector: 'app-views-home-component',
  templateUrl: './views-home-component.component.html',
  styleUrls: ['./views-home-component.component.css']
})
export class ViewsHomeComponentComponent {
  //mockup data property name stats with objects we want to communicate down to our statistics component
stats = [
  {value: 22, label: '# of Users'},
  {value: 900, label: 'Revenue'},
  {value: 50, label: 'Reviews'}
];

//images we want to communicate down to the items component
items = [
  {image: '/assets/images/couch.jpeg', title: 'Couch', description: 'Amazing couch'},
  {image: '/assets/images/dresser.jpeg', title: 'Dresser', description: 'Amazing dresser to put stuff'},
] 


}
