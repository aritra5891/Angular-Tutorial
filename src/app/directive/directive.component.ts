import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {
 
  toggleHide:boolean = false;
  displayText:string = 'OFF';
  arrNum: Array<number> = [];

  btnClick() {
  	this.toggleHide = !this.toggleHide;
  	this.displayText = this.toggleHide === true ? 'ON' : 'OFF';
  	this.arrNum.push(this.arrNum.length + 1);
  }	
  
  getbgColor(i) {
  	if(i >= 4)
  		return 'blue';
  }

  constructor() { }

  ngOnInit() {
  }

}
