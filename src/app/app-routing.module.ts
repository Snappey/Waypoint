import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LinkGridComponent } from './components/link-grid/link-grid.component';

const routes: Routes = [
  { path: '', component: LinkGridComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
