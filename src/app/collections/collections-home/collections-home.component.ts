import { Component } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent {

  //mockup data to use in the table
  data = [
    { name: 'Kevin', age: 31, job: 'UX Designer'},
    { name: 'Anna', age: 33, job: 'Developer'},
    { name: 'Mark', age: 38, job: 'Developer'}
  ];
  //table header configuration properties
  headers = [
    {key: 'name', label: 'Name'},
    {key: 'age', label: 'Age'},
    {key: 'job', label: 'Job'}
  ];


}
