import { Injectable } from '@angular/core';
import { Info } from '../Model/info'; // Importing the Info model

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  list: any[] = []; // Initializing an empty array to hold data

  constructor() { }

  store(data: any[]){
    this.list = data; // Assigning the provided data to the service's list property
    localStorage.setItem("resumeData", JSON.stringify(this.list)); // Storing the data in local storage after converting it to a JSON string
  }

  getData(): Info[] {
    const dataString = localStorage.getItem('resumeData'); // Retrieving data from local storage with the key 'todo'
    if (dataString) {
      return JSON.parse(dataString) as Info[]; // Parsing the retrieved JSON string back to an array of Info objects
    } else {
      return []; // Returning an empty array if no data is found in local storage
    }
  }
}
