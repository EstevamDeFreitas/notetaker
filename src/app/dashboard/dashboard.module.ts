import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { NotesComponent } from './components/notes/notes.component';
import { DashComponent } from './components/dash/dash.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { TopToolbarComponent } from './components/top-toolbar/top-toolbar.component';
import {MatCardModule} from '@angular/material/card';
import { NoteComponent } from './components/shared/note/note.component';


@NgModule({
  declarations: [
    DashboardComponent,
    NotesComponent,
    DashComponent,
    ProjectsComponent,
    TopToolbarComponent,
    NoteComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule
  ]
})
export class DashboardModule { }
