//import input so we can tell accordion component that he is expected to receive a list of items
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent {
//decorator Input to tell this component that he is expected to receive a list of items
@Input() items: any = []; 


//add a property to check which item is open
openedItemIndex = 0;

//implement onClick method
//when the user clicks on an item (question) that item will open the others will close, this is because this method gives the openedItemIndex property the value of index, and the ngClass in the component will give the class active to the index value that is equal to the openedItemIndex
onClick(index: number){
  //the if statement tells if the user clicks on the already open item, it will close itself (as will give the property a value of -1, which we dont have, so it shows no content)
  if(index === this.openedItemIndex){
    this.openedItemIndex = -1;
  } else {
    this.openedItemIndex = index;
  }

}


}
