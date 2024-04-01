import { Component, EventEmitter, Output, inject } from '@angular/core';
import { FormService } from '../Service/form.service';
import { Info } from '../Model/info';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent {

  formService:FormService = inject(FormService)
  snippet:Info[];
  ngOnInit(){
   this.formService.getData().subscribe((data)=>{
    this.snippet = data
   })
  //  @Output()
  //  peopleId:EventEmitter <string> = new EventEmitter<string>();
 
  //  emitId(id:string|undefined){
  //   this.peopleId = id;
  //  }
}

}
