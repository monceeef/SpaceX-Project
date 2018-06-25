import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LaunchPadDetailsPage } from './launch-pad-details';

@NgModule({
  declarations: [
    LaunchPadDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(LaunchPadDetailsPage),
  ],
})
export class LaunchPadDetailsPageModule {}
