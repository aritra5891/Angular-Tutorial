import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning',
  templateUrl: './warning.component.html',
  styles: [`
  	p {
  		padding: 20px;
  		border: 1px solid red;
  		background-color: pink;
  	}

  `]
})
export class WarningComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
