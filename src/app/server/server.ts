export default class Server {
    name: string;
    status: string;
    password: string;

    constructor(name: string, status: string) {
        this.name = name;
        this.status = status;
        this.password = this.generatePassword(8);
    }

    generatePassword(length: number): string {
        let text = '';
        const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

        for (let i = 0; i < length; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }

        return text;
    }
}
