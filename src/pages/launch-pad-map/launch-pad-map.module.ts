import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LaunchPadMapPage } from './launch-pad-map';

@NgModule({
  declarations: [
    LaunchPadMapPage,
  ],
  imports: [
    IonicPageModule.forChild(LaunchPadMapPage),
  ],
})
export class LaunchPadMapPageModule {}
