import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, EventEmitter, Input, Output, ViewChild, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Info } from 'src/app/Model/info';
import { FileDownloadService } from 'src/app/Service/file-download.service';
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
  loader:boolean = true;
  formData: any;
  isLoggedIn :boolean = true;

  constructor( private fileDownloadService: FileDownloadService) {
    const serializedFormData = localStorage.getItem('formData');
    if (serializedFormData) {
      this.formData = JSON.parse(serializedFormData);
    }
    
  }

  @ViewChild('pdfContent') pdfContent: ElementRef;

  downloadFile() {
    this.fileDownloadService.generatePdf(this.pdfContent.nativeElement, 'my_component.pdf');

  }
}

