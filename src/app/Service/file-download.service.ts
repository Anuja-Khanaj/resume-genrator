// file-download.service.ts

import { Injectable } from '@angular/core';
import * as html2pdf from 'html2pdf.js'; // Correct import statement

@Injectable({
  providedIn: 'root'
})
export class FileDownloadService {
  private opt = {
    margin:       0,
    image:        { type: 'pdf', quality: 0.96 },
    html2canvas:  { scale: 1},
    jsPDF:        { unit: 'in', format: 'a4', orientation: 'l' }
  };

  constructor() {} // Constructor can be left empty if not needed

  generatePdf(element: HTMLElement, fileName: string) {
    html2pdf()
      .from(element)
      .set(this.opt) // Access opt using this.opt
      .save(fileName);
  }
}
