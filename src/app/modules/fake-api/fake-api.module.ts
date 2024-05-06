import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FakeApiRoutingModule } from './fake-api-routing.module';
import { FakeApiListComponent } from './fake-api-list/fake-api-list.component';


@NgModule({
  declarations: [
    FakeApiListComponent
  ],
  imports: [
    CommonModule,
    FakeApiRoutingModule
  ]
})
export class FakeApiModule { }
