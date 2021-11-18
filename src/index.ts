import { MyMap } from './MyMap';
import { User } from './User';
import { Company } from './Company';

const user = new User();
const company = new Company();
const myMap = new MyMap('map');

myMap.addMarker(user);
myMap.addMarker(company);