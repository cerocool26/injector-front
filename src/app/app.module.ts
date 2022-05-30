import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InjectorComponent } from './injector/injector.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from "@angular/material/slider";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatCardModule} from "@angular/material/card";
import { TypesComponent } from './injector/types/types.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatTableModule} from "@angular/material/table";
import { RepairComponent } from './injector/repair/repair.component';
import {MatListModule} from '@angular/material/list';
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatExpansionModule} from "@angular/material/expansion";
import { ToolsComponent } from './injector/tools/tools.component';
import {MatIconModule} from "@angular/material/icon";
import { CalibrationBosch1Component } from './injector/calibration-bosch1/calibration-bosch1.component';
import {MatTabsModule} from "@angular/material/tabs";
import { CalibrationBosch2Component } from './injector/calibration-bosch2/calibration-bosch2.component';
import { CalibrationDensoComponent } from './injector/calibration-denso/calibration-denso.component';
import { CalibrationBosch3Component } from './injector/calibration-bosch3/calibration-bosch3.component';
import { CreateTestComponent } from './injector/create-test/create-test.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { MatInputModule } from '@angular/material/input';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    InjectorComponent,
    TypesComponent,
    RepairComponent,
    ToolsComponent,
    CalibrationBosch1Component,
    CalibrationBosch2Component,
    CalibrationDensoComponent,
    CalibrationBosch3Component,
    CreateTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatToolbarModule,
    MatGridListModule,
    MatCardModule,
    MatDialogModule,
    MatTableModule,
    MatListModule,
    MatProgressBarModule,
    MatExpansionModule,
    MatIconModule,
    MatTabsModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
