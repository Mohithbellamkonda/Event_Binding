import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'event_binding';
  
  public name = "Car Care"
  public car  =  "Toyato"
  public image ="/assets/logo.jpg"

  
  purchase(){
    
    console.log("Thank you for the purchase")
  }
}
