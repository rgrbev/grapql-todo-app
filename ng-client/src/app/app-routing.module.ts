import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodosComponent } from "./todo/todos.component";

const routes: Routes = [
  {
    path: 'todos',
    component: TodosComponent
  },
  {
    path: '',
    redirectTo: 'todos',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
