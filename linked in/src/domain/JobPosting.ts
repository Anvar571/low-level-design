import { Base } from "./base";

export interface JobPostingDetail {
    id?: string;
    title: string;
    description: string;
    requirements: string;
    location: string;
    createdAt: Date;
}

export class JobPosting extends Base {
    constructor(private jobPosting: JobPostingDetail) {
        super();
    }

    public get title() {
        return this.jobPosting.title;
    }

    public get description() {
        return this.jobPosting.description;
    }

    public get requirements() {
        return this.jobPosting.requirements;
    }

    public get location() {
        return this.jobPosting.location;
    }

    public get createdAt() {
        return this.jobPosting.createdAt;
    }
}