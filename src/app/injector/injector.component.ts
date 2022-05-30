import { Component} from '@angular/core';
import {TypesComponent} from "./types/types.component";
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";

@Component({
  selector: 'app-injector',
  templateUrl: './injector.component.html',
  styleUrls: ['./injector.component.css']
})
export class InjectorComponent{

  constructor(public dialog: MatDialog, public router:Router) { }

  openDialog(tipo:string) {
      this.dialog.open(TypesComponent,{data:{id:tipo}});
  }

  openTools(){
    this.router.navigateByUrl('/tools')
  }

  openCalibration(){
    this.router.navigateByUrl("/calibracionBosch1")
  }

  openCalibration2(){
    this.router.navigateByUrl("/calibracionBosch2")
  }

  openCalibration3(){
    this.router.navigateByUrl("/calibracionBosch3")
  }

  openCalibration4(){
    this.router.navigateByUrl("/calibracionDenso")
  }

  openCreateTestview(){
    this.router.navigateByUrl("/createTest")
  }
}
