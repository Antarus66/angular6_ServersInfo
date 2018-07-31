import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent {
    id: number = 10;
    status: string = 'offline';

    getServerStatus() {
        return this.status;
    }
}
