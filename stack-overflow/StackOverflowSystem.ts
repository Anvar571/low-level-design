
export class StackOverflowSystem{
    private static instanse: StackOverflowSystem | null;

    private constructor(){}

    public static getInstanse() {
        if(this.instanse){
            return this.instanse
        }
        return new StackOverflowSystem();
    }

    
}