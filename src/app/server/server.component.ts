import { Component, Input } from '@angular/core';
import Server from './server';
import ExpandTry from './expandTry';

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
    expandTries: Array<ExpandTry> = [];

    switchExpandDetails() {
        this.expandDetails = !this.expandDetails;

        const id = this.expandTries.length + 1;
        const newStatus = this.expandDetails ? this.OPEN : this.CLOSED;

        this.expandTries.push(new ExpandTry(id, newStatus));
    }
}
