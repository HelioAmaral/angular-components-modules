//we have to import Input to allow the item component to receive data
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent {
  //add an input property so our component can receive the data that will tell which images to display
@Input() items: any = [];
}
