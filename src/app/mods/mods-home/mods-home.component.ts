import { Component } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent {

  //property that will control if the modal is shown or not
  modalOpen = false;

  //mockup items to display on Accordion component
  items = [
    {title: 'Why is the world round?', content: 'Because it is!!'},
    {title: 'What does a strawberry tastes like?', content: 'A strawberry tastes very different from a banana!'},
    {title: 'What color is that dog?', content: 'That dog is NOT brown!'}
  ];

  //onClick method will revert the modalOpen property, if its false turns it into true and vice versa
  onClick(){
this.modalOpen = !this.modalOpen;
  }

}
