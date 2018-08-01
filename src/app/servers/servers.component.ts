import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  serverStatus:string = 'Online';
  serverToggle:string = 'Turn OFF'
  eventText:string = '';

  changeServerToggle() {
  		this.serverStatus === "Online" ? 
  			(this.serverStatus = "Offline", this.serverToggle = "Turn ON") : 
  			(this.serverStatus = 'Online', this.serverToggle = 'Turn OFF');
  }

  onInput(event: Event) {
  	this.eventText = (<HTMLInputElement>event.target).value;
  }

  constructor() {
  }

  ngOnInit() {
  }

}
