import { isBoolean } from 'util';

export class Satellite {
   
    
    name: string;
    orbitType: string;
    type: string;
    operational: boolean;
    launchDate: string; 

    constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean){
            //this is what the constructor looks like
        this.name = name; 
        this.orbitType = orbitType;
        this.type =type;
        this.operational = operational; 
        this.launchDate = launchDate; 
    }
     shouldShowWarn():boolean {
        if (this.type === "Space Debris"){             
            return true
        }

    }


}
