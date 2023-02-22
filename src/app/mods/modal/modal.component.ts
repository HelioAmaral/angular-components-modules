import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(private el: ElementRef){

  }
//ngOnInit is a lifeCycle hook (a method)
  ngOnInit() {
    document.body.appendChild(this.el.nativeElement); 
  }

}
