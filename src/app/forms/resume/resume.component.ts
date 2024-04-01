import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Info } from 'src/app/Model/info';
import { FormService } from 'src/app/Service/form.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {
  display:boolean 
   data : Info[]       
  formservice:FormService = inject(FormService);
  router:Router = inject(Router)

  @Input() formData: any;
  ngOnInit(){
    this.formservice.getData().subscribe({next:(data:Info[])=>{
      this.data = data
      // data.values()
    }})
    
  }
  @Output() displaybtn = new EventEmitter<boolean>();
  OnDownloadClick(){

   
    alert('After Downloading you resume will be reset. Are you sure to download')
    this.router.navigate(['/Forms'])
    this.displaybtn.emit(true)
    this.formservice.deleteData()
 
  }

  onUpdateClicked(){

  }
  
}
