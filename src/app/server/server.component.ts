import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css']
})
export class ServerComponent {
    readonly OPEN = 'OPENED';
    readonly CLOSED = 'CLOSED';

    id: number = 10;
    status: string = 'offline';
    expandDetails: boolean = false;
    expandTries: array = [];

    getServerStatus() {
        return this.status;
    }

    switchExpandDetails() {
        this.expandDetails = !this.expandDetails;

        this.expandTries.push({
            id: this.expandTries.length + 1,
            timestamp: new Date(),
            newStatus: this.expandDetails ? this.OPEN : this.CLOSED
        });
    }
}
