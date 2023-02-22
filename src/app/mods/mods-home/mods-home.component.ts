import { Component } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent {

  //property that will control if the modal is shown or not
  modalOpen = false;

  //onClick method will revert the modalOpen property, if its false turns it into true and vice versa
  onClick(){
this.modalOpen = !this.modalOpen;
  }

}
