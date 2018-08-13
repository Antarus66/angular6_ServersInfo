import { Component, OnInit } from '@angular/core';
import Server from '../server/server';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
    servers: Array<Server> = [
        {
            name: 'Test Server',
            status: 'offline'
        }, {
            name: 'Stage Server',
            status: 'offline'
        },
    ];

    allowNewServer = false;
    serverCreationStatus = 'No servers were created';
    newServerName = 'Server';

    constructor() {
      setTimeout(() => {
         this.allowNewServer = true;
      }, 2000);
    }

    ngOnInit() {
    }

    onServerCreate() {
      this.serverCreationStatus = `Server was created. The name is "${this.newServerName}"`;
      this.servers.push(new Server(this.newServerName, 'offline'));
    }
}
