
import { Component, OnInit } from '@angular/core';
import { Contact } from './contact';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  favoriteColor = '';
  submitted = false;

  model = new Contact('Your name', 'Your Email', 'Say Hello');
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.model.name);
    console.log(this.model.message);
    console.log(this.model.email);

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.http.post('https://formspree.io/f/xaylaoar',
      { name: this.model.name, replyto: this.model.email, message: this.model.message },
      { 'headers': headers }).subscribe(
        response => {
          console.log(response);
        }
      );

  }

}
