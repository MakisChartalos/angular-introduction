import { Component } from '@angular/core';

@Component({
  selector: 'app-person-table',
  standalone: true,
  imports: [],
  templateUrl: './person-table.component.html',
  styleUrl: './person-table.component.css'
})
export class PersonTableComponent {
  person = {
    givenName: "Makis",
    surName: "Chartalos",
    age: 0x37,
    email: 'makischartalos@gmail.com'
  }

}