import { Education } from "./Education";
import { Experiences } from "./Experience";
import { Skills } from "./Skill";

export interface ProfileProperties {
    picture: string,
    headline: string;
    summary: string;
    experiences: Experiences;
    educations: Education;
    skills: Skills;
}

export class Profile {
    constructor(private profile: ProfileProperties) {}

    public get picture() {
        return this.profile.picture;
    }

    public get headline() {
        return this.profile.headline;
    }

    public get summary() {
        return this.profile.summary;
    }

    public get experiences() {
        return this.profile.experiences;
    }

    public get educations() {
        return this.profile.educations;
    } 

    public get skills() {
        return this.profile.skills;
    }
}