import { Component } from '@angular/core';
import { FsFile } from '../../../../src';

@Component({
  selector: 'file-picker-existing-file',
  templateUrl: 'file-picker-existing-file.component.html',
  styleUrls: [ 'file-picker-existing-file.component.css' ]
})
export class FilePickerExistingFileComponent {
  public file = new FsFile('http://unec.edu.az/application/uploads/2014/12/pdf-sample.pdf', 'Document.pdf');

  public select(file) {
    this.file = file;
  }

  public remove() {
    alert('File was removed');
  }
}
