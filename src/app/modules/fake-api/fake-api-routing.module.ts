import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FakeApiListComponent } from './fake-api-list/fake-api-list.component';

const routes: Routes = [
  {
    path: "",
    component: FakeApiListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FakeApiRoutingModule { }
