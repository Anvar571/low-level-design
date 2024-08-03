
export class Experiences {
    private body: any;
    
    constructor(body: any) {
        this.body = body;
    }

    public get get_body() {
        return this.body;
    }

    public update_body(body: any) {
        this.body = body;
    }
}
