import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
    servers: Array<string> = [
        'Test Server',
        'Test Server 2'
    ];

    allowNewServer = false;
    serverCreationStatus = 'No servers were created';
    newServerName = 'TestServer';

    constructor() {
      setTimeout(() => {
         this.allowNewServer = true;
      }, 2000);
    }

    ngOnInit() {
    }

    onServerCreate() {
      this.serverCreationStatus = 'Server was created. The name is ' + this.newServerName;
      this.servers.push(this.newServerName);
    }
}
