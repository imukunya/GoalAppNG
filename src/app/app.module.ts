import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoalComponent } from './goal/goal.component';
import { GoalDetailComponentComponent } from './goal-detail-component/goal-detail-component.component';
import { StrikethroughDirective } from './strikethrough.directive';
import { DateCountPipe } from './date-count.pipe';
import { GoalFormComponent } from './goal-form/goal-form.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {NavbarComponent} from '';
import { GoalService } from './goal-service/goal.service';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpClientModule } from '@ngx-progressbar/http-client';
@NgModule({
  declarations: [
    AppComponent,
    GoalComponent,
    GoalDetailComponentComponent,
    StrikethroughDirective,
    DateCountPipe,
    GoalFormComponent,
    NavbarComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [GoalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
