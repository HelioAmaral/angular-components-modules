//the input decorator needs to be imported in order to pass information from the parent component
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
//to allow us to pass class names from the parent component into the table component
@Input() classNames = '';


  //we write the different properties we expect to receive inside our component class
  //by doing this we can now pass data from collections-home.html to the table component
@Input() data: any = [];
@Input() headers: any = [];
}
