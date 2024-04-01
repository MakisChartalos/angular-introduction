import { Component } from '@angular/core';
import { PersonTableComponent } from './components/person-table/person-table.component';
import { Person } from './shared/interfaces/person';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PersonTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = 'Chartalos';
  
  person0: Person =
{
    givenName: "Makis",
    surName: "Chartalos",
    age: 0x37,
    email: 'makischartalos@gmail.com',
    address: "Athens, Greece"
  };

  person1: Person =
  {
      givenName: "John",
      surName: "Doe",
      age: 0x25,
      email: 'joe@example.com',
      address: "New York, "
    }

}
