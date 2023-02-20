//the input decorator needs to be imported in order to pass information from the parent component
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  //we write the different properties we expect to receive inside our component class
  //by doing this we can now pass data from collections-home.html to the table component
@Input() data = [];
@Input() headers = [];
}
