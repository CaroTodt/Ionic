import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";
import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { PersonService } from "./person.service";

@Component({
    selector: 'app-persons',
    templateUrl: './persons.component.html'
})

export class PersonsComponent implements OnInit, OnDestroy{
 personsList: string[] = [];
 isFetching = false;
 private personListSubs: Subscription = new Subscription;

 constructor(private prsService: PersonService){
    
 }

    ngOnInit() {
        
        this.personListSubs = this.prsService.personsChanged.subscribe(persons => {
            this.personsList = persons;
            this.isFetching = false;
    });
    this.isFetching = true;
    this.prsService.fetchPersons();
    }

 onRemovePerson(personName: string){
     this.prsService.removePerson(personName);
 }

 ngOnDestroy(){
     this.personListSubs.unsubscribe();
 }

}