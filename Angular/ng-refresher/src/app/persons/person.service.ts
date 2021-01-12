import { HttpClient } from '@angular/common/http';
import { mapToMapExpression } from '@angular/compiler/src/render3/util';
import{ Injectable }from '@angular/core';
import {Subject} from 'rxjs';
import {map} from 'rxjs/operators';
@Injectable({providedIn: 'root'})
export class PersonService {
  personsChanged = new Subject<string[]>()
  persons: string[] = [];
  constructor(private http: HttpClient) { }

  fetchPersons() {
    this.http.get<any>
    ('https://swapi.dev/api/people/')
    .pipe(map(resData => {
      return resData.results.map((character: { name: string; }) =>
        character.name)
    }))
    .subscribe(transformedData => {
      this.personsChanged.next(transformedData)
    });
  };
  title: any;

  addPerson(name:string){
    this.persons.push(name);
    console.log(this.persons);
    this.personsChanged.next(this.persons);
  }

  removePerson(name:string){
    this.persons = this.persons.filter(person =>{
      return person !==name
    }
      );
      this.personsChanged.next(this.persons);
  }


}