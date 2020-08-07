import { Component } from '@angular/core';
import { Satellite } from './satellite';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'orbit-report';

  sourceList: Satellite[];


  satellitesUrl: string  = 'https://handlers.education.launchcode.org/static/satellites.json';
  displayList: Satellite[]
  constructor(){
    this.sourceList = [ ];
   // this.displayList = [ ];
        window.fetch(this.satellitesUrl).then(function(response){

          response.json().then(function(data){
            let fetSats = data.satellites ;
              for (let i = 0 ; i <fetSats.length;i ++){
                  let satellite = new Satellite (fetSats[i].name,fetSats[i].type, fetSats[i].launchDate,fetSats[i].orbitType,fetSats[i].operational);
                  this.sourceList.push(satellite);
              }
              this.displayList = this.sourceList.slice(0);
                
            }.bind(this));
        }.bind(this));
      /*
      new Satellite("SiriusXM","Communication","2009-03-21","LOW",true),
      new Satellite("Cat Scanner", "Imaging", "2012-01-05", "LOW", true),
      new Satellite("Weber Grill", "Space Debris", "1996-03-25", "HIGH", false),
      new Satellite("GPS 938", "Positioning", "2001-11-01", "HIGH", true),
      new Satellite("ISS", "Space Station", "1998-11-20", "LOW", true),
        */
   
        
  }
  search(searchTerm: string): void 
  {
    let matchSat: Satellite[] = [];
    searchTerm = searchTerm.toLowerCase();
    for(let i = 0; i< this.sourceList.length; i++)
      {
        let name = this.sourceList[i].name.toLowerCase();
        if(name.indexOf(searchTerm) >= 0 )
        {
          matchSat.push(this.sourceList[i]);
        }

      }
      
      this.displayList = matchSat;
      
  }
  
}
