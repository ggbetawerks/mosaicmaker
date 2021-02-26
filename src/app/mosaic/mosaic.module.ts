import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MosaicPageRoutingModule } from './mosaic-routing.module';

import { MosaicPage } from './mosaic.page';
import { ImageCropperModule } from 'ngx-image-cropper';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImageCropperModule,
    MosaicPageRoutingModule,
  ],
  declarations: [MosaicPage],
})
export class MosaicPageModule {}
