export default class ExpandTry {
    id: number;
    newStatus: string;
    timestamp: Date;

    constructor(id: number, newStatus: string) {
        this.id = id;
        this.newStatus = newStatus;
        this.timestamp = new Date();
    }
}