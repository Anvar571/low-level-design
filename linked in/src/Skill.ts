
export class Skills {
    private skills: Set<string>;
    constructor() {
        this.skills = new Set();
    }

    addSkill(...args: string[]) {
        for (let arg of args) {
            this.skills.add(arg);
        }
    }

    remove(skil: string) {
        this.skills.delete(skil);
    }

    update(oldName: string, newName: string) {
        this.skills.delete(oldName);
        this.skills.add(newName);
    }
}
