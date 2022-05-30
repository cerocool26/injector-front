import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {RepairComponent} from "../repair/repair.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.css']
})
export class TypesComponent implements OnInit{
  tipo:string= "";
  name:string= "";
  dataSource:any[] = [];
  inyectoresBosch: any[] = [
    {position: 1, name: 'CRI 1'},
    {position: 2, name: 'CRI 2'},
    {position: 3, name: 'CRI 2.2'},
    {position: 4, name: 'CRIN 1'},
    {position: 5, name: 'CRIN 1.6'},
    {position: 6, name: 'CRI 2.1'},
    {position: 7, name: 'CRI 2.5'},
    {position: 8, name: 'CRI 3.0'},
    {position: 9, name: 'CRI 3.1'},
    {position: 10, name: 'CRI 3.2'},
  ];

  inyectoresDenso: any[] = [
    {position: 1, name: 'Denso G2S'},
    {position: 2, name: 'Denso G3S'},
    {position: 3, name: 'Denso G4S'},
  ];

  inyectoresDelphi: any[] = [
    {position: 1, name: 'DELPHI DF1'},
    {position: 2, name: 'DELPHI DF1.1'},
    {position: 3, name: 'DELPHI DF1.2'},
    {position: 4, name: 'DELPHI DF1.3'},
    {position: 5, name: 'DELPHI DF1.4'},
    {position: 6, name: 'DELPHI DF1.5'},
  ];

  displayedColumns: string[] = ['position', 'name', 'repair'];


  constructor(@Inject(MAT_DIALOG_DATA) public data: tiposInjectores,
              public dialog:MatDialog,
              public dialogRef: MatDialogRef<TypesComponent>,
              private router:Router) {}

  ngOnInit(): void {
        this.typeInjector();
  }


  typeInjector():void{
    //console.log(this.data.id)
    if( this.data.id == 'bosch'){
      this.dataSource = this.inyectoresBosch;
      this.tipo = "bosch";
    }
    if( this.data.id == 'denso'){
      this.dataSource = this.inyectoresDenso;
      this.tipo = "denso";
    }
    if( this.data.id == 'delphi'){
      this.dataSource = this.inyectoresDelphi;
      this.tipo = "delphi";
    }
  }

  openRepair(tipo:string,name:string){
    this.dialog.open(RepairComponent,{data:{tipo:tipo,name:name}});
    this.closeDialog();
  }

  closeDialog():void{
    this.dialogRef.close(null);
  }
}

interface tiposInjectores{
  id : string;
}



