import faker from 'faker';
import { Mappable } from './MyMap';

export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  }
  color: string = 'red';

  constructor() {
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    } 
    this.name = `${faker.name.firstName()} ${faker.name.lastName()}`;
  }

  markerContent(): string {
    return `
      <div>  
        <h1>User Name: ${this.name}</h1>
      </div>
    `;
  }
}