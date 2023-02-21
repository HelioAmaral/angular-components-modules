
//we have to import Input to allow the statistics component to receive data
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent {
//add an input property so our component can receive the data that will tell which statistics to display
@Input() data: any = [];
}
