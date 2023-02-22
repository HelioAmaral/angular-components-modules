//import Output and EventEmitter to do child to parent communication
import {
  Component,
  OnInit,
  ElementRef,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  //output decorator to do child to parent communication, close property is the event we are going to trigger, thats the event we are going to watch for in the parent component, this will be an instance of a new EventEmitter
  @Output() close = new EventEmitter();

  constructor(private el: ElementRef) {}
  //ngOnInit is a lifeCycle hook (a method)
  ngOnInit() {
    document.body.appendChild(this.el.nativeElement);
  }

  ngOnDestroy() {
    this.el.nativeElement.remove();
  }

  //onCloseClick method, anytime we call onCloseClick we will refference the close emmiter and emitt an event
  onCloseClick() {
    this.close.emit();
  }
}
