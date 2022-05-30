import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InjectorComponent} from "./injector/injector.component";
import {RepairComponent} from "./injector/repair/repair.component";
import {ToolsComponent} from "./injector/tools/tools.component";
import {CalibrationBosch1Component} from "./injector/calibration-bosch1/calibration-bosch1.component";
import {CalibrationBosch2Component} from "./injector/calibration-bosch2/calibration-bosch2.component";
import {CalibrationDensoComponent} from "./injector/calibration-denso/calibration-denso.component";
import {CalibrationBosch3Component} from "./injector/calibration-bosch3/calibration-bosch3.component";
import {CreateTestComponent} from "./injector/create-test/create-test.component";

const routes: Routes = [{path: 'inyectores', component: InjectorComponent},
                        {path: 'repair', component: RepairComponent},
                        {path: 'tools', component: ToolsComponent},
                        {path: 'calibracionBosch1', component: CalibrationBosch1Component},
                        {path: 'calibracionBosch2', component: CalibrationBosch2Component},
                        {path: 'calibracionBosch3', component: CalibrationBosch3Component},
                        {path: 'calibracionDenso', component: CalibrationDensoComponent},
                        {path: 'createTest', component:CreateTestComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
