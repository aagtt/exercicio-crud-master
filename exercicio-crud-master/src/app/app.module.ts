import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionModule, GrowlModule, DataListModule } from 'primeng/primeng';
import { ToolbarModule, ButtonModule, SplitButtonModule } from 'primeng/primeng';
import { AlunoService } from './aluno.service';
import { AlunoModule } from './aluno/aluno.module';
import { CursoModule } from './curso/curso.module';
import { CursoService } from './curso.service';
import { DisciplinaService } from './disciplina.service';
import { DisciplinaModule } from './disciplina/disciplina.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlunoModule,
    CursoModule,
    DisciplinaModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AccordionModule, GrowlModule, DataListModule, ToolbarModule, ButtonModule, SplitButtonModule
  ],
  providers: [AlunoService, CursoService, DisciplinaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
