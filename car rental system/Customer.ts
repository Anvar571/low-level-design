export interface CustomerModel {
    name: string;
    contact_details: any;
    license_number: number;
}

export class Customer implements CustomerModel {
    constructor(private customer: CustomerModel) {}
    public get name(){
        return this.customer.name;
    };
    public get contact_details(){
        return this.customer.contact_details;
    };
    public get license_number(){
        return this.customer.license_number;
    };
}