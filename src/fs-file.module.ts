import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatTooltipModule,
} from '@angular/material';

import { FsCommonModule } from '@firestitch/common';

import {
  FsFileComponent,
  FsFilePreviewsComponent,
  FsFilePreviewComponent,
  FsFilePickerComponent,
  FsFilePreviewsBaseComponent,
  FsFileDragBaseComponent,
} from './components';
import { FsFilePreviewActionDirective } from './directives';
import { CordovaService } from './services';

@NgModule({
  imports: [
    CommonModule,
    FsCommonModule,
    MatIconModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    MatButtonModule,
  ],
  exports: [
    FsFileComponent,
    FsFilePreviewsComponent,
    FsFilePreviewComponent,
    FsFilePreviewActionDirective,
    FsFilePickerComponent
  ],
  entryComponents: [
  ],
  declarations: [
    FsFileComponent,
    FsFilePreviewsComponent,
    FsFilePreviewComponent,
    FsFilePreviewActionDirective,
    FsFileDragBaseComponent,
    FsFilePreviewsBaseComponent,
    FsFilePickerComponent
  ],
  providers: [
    CordovaService
  ],
})
export class FsFileModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: FsFileModule,
      providers: []
    };
  }
}
