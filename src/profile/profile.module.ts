import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';

import { ProfileRoutingModule } from './profile-routing.module';
import { WallComponent } from './wall/wall.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [WallComponent],
  imports: [CommonModule, ProfileRoutingModule, MatSliderModule],
})
export class ProfileModule {}
