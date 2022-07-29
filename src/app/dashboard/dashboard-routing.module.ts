import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashComponent } from './components/dash/dash.component';
import { NotesComponent } from './components/notes/notes.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, children:[
    { path: '', redirectTo:'home', pathMatch:'full' },
    { path : 'home', component: DashComponent },
    {path : 'notes', component: NotesComponent},
    {path : 'projects', component: ProjectsComponent},

  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
