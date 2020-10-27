import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import { ContentComponent } from './content/content.component';
import { ConentMainComponent } from './conent-main/conent-main.component';
import { ContentLabsComponent } from './content-labs/content-labs.component';
import { ContentContactComponent } from './content-contact/content-contact.component';


@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    ConentMainComponent,
    ContentLabsComponent,
    ContentContactComponent
  ],
  imports: [
    BrowserModule,FlexLayoutModule,MatCardModule,MatMenuModule,MatIconModule,MatButtonModule,MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
