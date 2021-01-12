import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tlc-site';
  isHidden=false;
  isAboutClicked=true;
  isProjectsClicked=false;
  isContactsClicked=false;
  
}
