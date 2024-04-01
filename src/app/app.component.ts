import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = 'Chartalos';
  
  person = {
    givenName: "Makis",
    surName: "Chartalos",
    age: 0x37,
    email: 'makischartalos@gmail.com'
  }
}
