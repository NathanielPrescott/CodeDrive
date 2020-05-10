import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';

import { ProjectsBannerComponent } from '../projects-banner/projects-banner.component';
import { ProjectComponent } from '../project/project.component';

const routes: Routes = [
  { path: 'projects-banner', component: ProjectsBannerComponent },
  { path: 'project', component: ProjectComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ProjectsModule { }
