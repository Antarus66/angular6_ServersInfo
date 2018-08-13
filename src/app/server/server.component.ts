import { Component, Input } from '@angular/core';
import Server from './server';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css']
})
export class ServerComponent {
    readonly OPEN = 'OPENED';
    readonly CLOSED = 'CLOSED';

    @Input() server: Server;

    expandDetails: boolean = false;
    expandTries: Array<object> = [];

    switchExpandDetails() {
        this.expandDetails = !this.expandDetails;

        this.expandTries.push({
            id: this.expandTries.length + 1,
            timestamp: new Date(),
            newStatus: this.expandDetails ? this.OPEN : this.CLOSED
        });
    }
}
